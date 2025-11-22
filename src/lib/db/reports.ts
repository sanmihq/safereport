import { db } from "../firebase";
import {
    collection,
    addDoc,
    doc,
    getDoc,
    updateDoc,
    getDocs,
    query,
    where,
    serverTimestamp,
} from "firebase/firestore";
import { Report } from "@/models/report";

const reportsRef = collection(db, "reports");

export async function createReport(
  data: Omit<
    Report,
    "id" | "createdAt" | "upvotes" | "downvotes" | "commentCount"
  >,
) {
  const docRef = await addDoc(reportsRef, {
    ...data,
    createdAt: Date.now(),
    upvotes: 0,
    downvotes: 0,
    commentCount: 0,
  });

  return docRef.id;
}

export async function getReport(id: string) {
  const snapshot = await getDoc(doc(db, "reports", id));
  return snapshot.exists() ? (snapshot.data() as Report) : null;
}

export async function getAllReports() {
  const snapshot = await getDocs(reportsRef);
  return snapshot.docs.map((d) => ({ id: d.id, ...(d.data() as Report) }));
}
