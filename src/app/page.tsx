"use client";
import UseEffect from "@/components/sampleHooks/UseEffect";
import UseState from "@/components/sampleHooks/UseState";
import UseEffect2 from "@/components/sampleHooks/UseEffect2";
import { useUser } from "@/components/sampleHooks/UseContext/UserContext";
import { useEffect } from "react";
import UseLayoutEffect from "@/components/sampleHooks/UseLayoutEffect";
import UseReducer from "@/components/sampleHooks/UseReducer";
import UseRef from "@/components/sampleHooks/UseRef";
import UseRef2 from "@/components/sampleHooks/UseRef2";

export default function Home() {
  // const { user, login, logout } = useUser();
  // console.log("user : " + user);
  // useEffect(() => {
  //   login();
  // }, [user]);
  // console.log("user : " + user);
  return (
    <div className="flex flex-row justify-center items-center min-h-screen">
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseEffect2 /> */}
      {/* <UseLayoutEffect /> */}
      {/* <UseReducer /> */}
      {/* <UseRef /> */}
      <UseRef2 value={4} />
    </div>
  );
}
