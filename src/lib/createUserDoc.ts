import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import { User } from "firebase/auth";

export async function createUserDoc(user: User, isGuest = false) {
  if (!user) return;

  const ref = doc(db, "users", user.uid);
  const snap = await getDoc(ref);

  if (snap.exists()) return;

  await setDoc(ref, {
    uid: user.uid,
    email: user.email || null,
    name: user.displayName || "Guest User",
    isGuest,
    createdAt: Date.now(),
  });
}
