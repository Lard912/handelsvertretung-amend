"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    // Beim ersten Laden (inkl. Reload) NICHT scrollen
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    // Nur bei echten Seitenwechseln
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}