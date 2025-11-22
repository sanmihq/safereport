"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { onSnapshot, collection } from "firebase/firestore";
import { Report } from "@/models/report";

export function useReports() {
  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "reports"), (snapshot) => {
      setReports(
        snapshot.docs.map((d) => ({ id: d.id, ...(d.data() as Report) })),
      );
    });

    return () => unsub();
  }, []);

  return reports;
}
