import React, { FC } from "react";
import Link from "next/link";

interface Props {}

const LabMainPage: FC<Props> = () => {
  return (
    <section>
      <ol>
        <li>
          <Link href={`/lab/space-warp`}>
            My first Lab Project, The space warp effect using Threejs
          </Link>
        </li>
        <li>
          <Link href={`/lab/orbit-chat`}>
            Orbit Chat - Track the ISS in real-time with 3D globe visualization
          </Link>
        </li>
      </ol>
    </section>
  );
};

export default LabMainPage;
