"use client";
import UseEffect from "@/components/sampleHooks/UseEffect";
import UseState from "@/components/sampleHooks/UseState";
import UseEffect2 from "@/components/sampleHooks/UseEffect2";

export default function Home() {
  return (
    <div className="flex flex-row justify-center items-center min-h-screen">
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      <UseEffect2 />
    </div>
  );
}
