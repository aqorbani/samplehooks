"use client";
import React, { useSyncExternalStore } from "react";

const UseSyncExternalStore = () => {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot);
  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
};

export default UseSyncExternalStore;

function getSnapshot() {
  return navigator.onLine;
}

function subscribe(callback: any) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}
