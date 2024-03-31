import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../pages/Authentication/firebase";

const GoogleProvider = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);

    return [user, null];
  } catch (error) {
    return [null, error];
  }
};
export default GoogleProvider;
