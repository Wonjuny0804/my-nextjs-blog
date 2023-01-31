import {
  getAuth,
  signInWithEmailAndPassword,
  type Auth,
  onAuthStateChanged,
} from "firebase/auth";
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
      console.log(userCredentials);
      return userCredentials; // not returning these informations here, probably need somekind of logic here too.
    } catch (error: unknown) {
      console.dir(error);

      // TODO: need error dealing codes here.
      throw new Error("There was an error while logging in.");
    }
  }

  async validateSignIn(onAuthenticated: () => void, onFailed: () => void) {
    onAuthStateChanged(this.auth, async (user) => {
      if (user) {
        onAuthenticated();
      } else {
        onFailed();
      }
    });
  }
}

const singleAdminConroller = new Admin();

export default singleAdminConroller;
