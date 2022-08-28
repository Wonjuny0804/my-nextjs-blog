import { initializeApp, type FirebaseApp } from "firebase/app";

// probably this logic should be moved to someplace else.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

// This controller is for initializing all services
class Service {
  private static instance: Service;
  private static firebaseapp: FirebaseApp;

  constructor() {
    Service.firebaseapp = initializeApp(firebaseConfig);
  }

  getService() {
    if (!Service.instance) {
      Service.instance = new Service();
    }

    return Service.instance;
  }

  getFirebaseApp() {
    if (!Service.firebaseapp) {
      Service.firebaseapp = initializeApp(firebaseConfig);
    }
    return Service.firebaseapp;
  }
}

const serviceInstance = new Service();
export default serviceInstance;
