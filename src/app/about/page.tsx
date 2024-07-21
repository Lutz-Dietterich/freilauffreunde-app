"use client"; // Markiert die Datei als Client-Komponente

import React, { useEffect } from "react";
import { useRouter } from "next/navigation"; // useRouter von "next/navigation" importieren für App Router

export default function Page() {
    const router = useRouter();
    const timeout = 5000;

    useEffect(() => {
        if (typeof window !== 'undefined') { // Überprüfen, ob wir uns auf der Client-Seite befinden
            const timer = setTimeout(() => {
                router.push("/");
            }, timeout);

            // Bereinige den Timer, falls die Komponente vor Ablauf der Zeitspanne entladen wird
            return () => clearTimeout(timer);
        }
    }, [router, timeout]);

    return (
        <div className=" bg-slate-300 w-1/2 m-auto">
        <div className="text-3xl">about</div>
      </div>
    );
}
