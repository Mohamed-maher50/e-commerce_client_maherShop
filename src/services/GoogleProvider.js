import {
  GoogleAuthProvider,
  getRedirectResult,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "../pages/Authentication/firebase";

const GoogleProvider = async () => {
  try {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);

    // console.log(user);
    // return [user, null];
  } catch (error) {
    return [null, error];
  }
};
export default GoogleProvider;
