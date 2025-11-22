import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { Comment } from "@/models/comment";

export async function addComment(data: Omit<Comment, "id" | "createdAt">) {
  return await addDoc(collection(db, "comments"), {
    ...data,
    createdAt: Date.now(),
  });
}
