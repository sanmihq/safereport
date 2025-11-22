import { db } from "../firebase";
import { collection, addDoc, setDoc, doc, getDoc } from "firebase/firestore";
import { Vote } from "@/models/vote";

export async function castVote(
  reportId: string,
  userId: string,
  value: 1 | -1,
) {
  const voteId = `${reportId}_${userId}`;
  await setDoc(doc(db, "votes", voteId), {
    id: voteId,
    reportId,
    userId,
    value,
    createdAt: Date.now(),
  });
}
