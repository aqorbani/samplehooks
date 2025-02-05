"use client";
import React from "react";
import { useOnlineStatus } from "./UseOnlineStatus";

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}

const UseDebugValue = () => {
  return <StatusBar />;
};

export default UseDebugValue;
