import { useEffect, useRef } from 'react';
import {
  FilesetResolver,
  HandLandmarker,
  HandLandmarkerResult,
} from '@mediapipe/tasks-vision';

export type GestureAction = {
    action: 'scale-to',
    value: number
} | {
    action: 'rotate-by',
    value: { x: number; y: number }
} | {
    action: 'flick-rotate',
    value: { x: number; y: number }
} | {
    action: 'color-change',
    value: number
};

type HandControlPanelProps = {
  onGesture: (gesture: GestureAction) => void;
  videoRef: React.RefObject<HTMLVideoElement | null>;
};

export default function HandControlPanel({ onGesture, videoRef }: HandControlPanelProps) {
  const handLandmarkerRef = useRef<HandLandmarker | null>(null);
  const animationFrameId = useRef<number | null>(null);

  const prevX = useRef<number | null>(null);
  const prevY = useRef<number | null>(null);
  const prevT = useRef<number | null>(null);
  const lastFlick = useRef(0);

  

  useEffect(() => {
    let running = true;

    const initializeHandLandmarker = async () => {
      const vision = await FilesetResolver.forVisionTasks(
        'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm'
      );

      handLandmarkerRef.current = await HandLandmarker.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath: '/models/hand_landmarker.task',
        },
        runningMode: 'VIDEO',
        numHands: 2,
      });

      const video = videoRef.current!;
      video.srcObject = await navigator.mediaDevices.getUserMedia({ video: true });

      let started = false;

      const maybeStart = () => {
        if (started) return;
        started = true;
        video.play();
        detectHands();
      };

      video.onloadedmetadata = maybeStart;

      setTimeout(() => {
        if (!started) {
          console.warn('[WARN] forcing gesture loop start');
          maybeStart();
        }
      }, 1000);
    };

    const detectHands = async () => {
      if (!running || !handLandmarkerRef.current || !videoRef.current) return;
      const nowInMs = Date.now();
      const results: HandLandmarkerResult = handLandmarkerRef.current.detectForVideo(
        videoRef.current,
        nowInMs
      );


      handleResults(results);

      animationFrameId.current = requestAnimationFrame(detectHands);
    };

    const handleResults = (results: HandLandmarkerResult) => {
      const now = Date.now();

      if (results.landmarks.length === 1) {
        const wrist = results.landmarks[0][0]; // wrist of first hand
        const x = wrist.x;
        const y = wrist.y;

        if (
          prevX.current !== null &&
          prevY.current !== null &&
          prevT.current !== null
        ) {
          const dt = (now - prevT.current) / 1000;
          const dx = x - prevX.current;
          const dy = y - prevY.current;

          // Rotation scale (smooth follow)
          const ROTATE_SCALE = 3;
          const rotX = dy * ROTATE_SCALE;
          const rotY = dx * ROTATE_SCALE;
          onGesture({ action: 'rotate-by', value: { x: rotX, y: rotY } });

          // Velocity-based flick rotation
          const vx = dx / dt;
          const vy = dy / dt;
          const speed = Math.sqrt(vx * vx + vy * vy);
          const FLICK_THRESHOLD = 1.2;

          if (speed > FLICK_THRESHOLD && now - lastFlick.current > 300) {
            lastFlick.current = now;
            onGesture({
              action: 'flick-rotate',
              value: { x: vy * 2, y: vx * 2 }, // direction scaled
            });
          }
        }

        prevX.current = x;
        prevY.current = y;
        prevT.current = now;

        const thumbTip = results.landmarks[0][4];
        const indexTip = results.landmarks[0][8];
        const dx = thumbTip.x - indexTip.x;
        const dy = thumbTip.y - indexTip.y;
        const pinchDistance = Math.sqrt(dx * dx + dy * dy);
        const intensity = Math.min(Math.max((pinchDistance - 0.02) * 15, 0), 1);

        onGesture({ action: 'color-change', value: intensity });
      }

      if (results.landmarks.length >= 2) {
        const hand1 = results.landmarks[0][0]; // wrist of hand 1
        const hand2 = results.landmarks[1][0]; // wrist of hand 2

        const dx = hand1.x - hand2.x;
        const dy = hand1.y - hand2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Map distance to scale factor (tweak multiplier as needed)
        const scale = Math.min(Math.max(distance * 5, 0.5), 2.0);

        onGesture({ action: 'scale-to', value: scale });
      }
    };

    initializeHandLandmarker();

    return () => {
      running = false;
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (videoRef.current?.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
        videoRef.current.srcObject = null;
      }
    };
  }, [onGesture, videoRef]);

  return (
    <video
      ref={videoRef}
      className="fixed bottom-4 left-4 w-32 h-24 object-cover rounded-md border border-white/20 shadow-lg z-50"
      muted
      autoPlay
    />
  );
}
