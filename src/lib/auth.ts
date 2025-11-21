import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInAnonymously,
  updateProfile,
} from "firebase/auth";
import { auth, googleProvider } from "./firebase";
import { createUserDoc } from "./createUserDoc";

export async function signUpWithEmail(
  firstName: string,
  lastName: string,
  email: string,
  password: string,
) {
  const res = await createUserWithEmailAndPassword(auth, email, password);

  await updateProfile(res.user, { displayName: `${firstName} ${lastName}` });
  await createUserDoc(res.user);

  return res.user;
}

export async function signInWithEmail(email: string, password: string) {
  const res = await signInWithEmailAndPassword(auth, email, password);
  return res.user;
}

export async function signInWithGoogle() {
  const res = await signInWithPopup(auth, googleProvider);
  await createUserDoc(res.user);
  return res.user;
}

export async function continueAsGuest() {
  const res = await signInAnonymously(auth);
  await createUserDoc(res.user, true);
  return res.user;
}
