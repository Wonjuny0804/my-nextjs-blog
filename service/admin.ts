import { getAuth, signInWithEmailAndPassword, type Auth } from "firebase/auth";
import ServiceInstance from "./service";

class Admin {
  auth: Auth;

  constructor() {
    const app = ServiceInstance.getFirebaseApp();
    const auth = getAuth(app);
    this.auth = auth;
  }

  async signInWithIDPW(credentials: { email: string; password: string }) {
    const { email, password } = credentials;

    try {
      const userCredentials = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return userCredentials;
    } catch (error: unknown) {
      console.dir(error);

      // TODO: need error dealing codes here.
      throw new Error("There was an error while logging in.");
    }
  }
}

const singleAdminConroller = new Admin();

export default singleAdminConroller;
