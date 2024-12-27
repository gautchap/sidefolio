"use client";

import { useSyncExternalStore } from "react";

function handleResize(callback: () => void) {
    window.addEventListener("resize", callback);
    return () => {
        window.removeEventListener("resize", callback);
    };
}

export function useWindowResize() {
    return useSyncExternalStore(
        handleResize,
        () => window.innerWidth,
        () => null
    );
}
