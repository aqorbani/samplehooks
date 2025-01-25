"use client";
import UseEffect from "@/components/sampleHooks/UseEffect";
import UseState from "@/components/sampleHooks/UseState";
import UseEffect2 from "@/components/sampleHooks/UseEffect2";
import { useUser } from "@/components/sampleHooks/UseContext/UserContext";
import { useEffect } from "react";

export default function Home() {
  const { user, login, logout } = useUser();
  console.log("user : " + user);
  useEffect(() => {
    login();
  }, [user]);
  console.log("user : " + user);
  return (
    <div className="flex flex-row justify-center items-center min-h-screen">
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseEffect2 /> */}
    </div>
  );
}
