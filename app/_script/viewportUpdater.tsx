
"use client";

import { useEffect } from "react";

const updateViewport = () => {
  const metaViewport = document.querySelector('meta[name="viewport"]');
  if (!metaViewport) return;

  const ua = navigator.userAgent;
  let content = "width=1040,user-scalable=no";

  if (ua.includes("iPad") || ua.includes("Macintosh")) {
    content = "width=1040,user-scalable=no";
  } else if (ua.includes("iPhone") || (ua.includes("Android") && ua.includes("Mobile"))) {
    content = "width=device-width,user-scalable=no";
  }

  metaViewport.setAttribute("content", content);
};

const ViewportUpdater = () => {
  useEffect(() => {
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  return null;
};

export default ViewportUpdater;