import { useEffect } from "react";

export default function UseEffect2() {
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      e.preventDefault();
      console.log(e);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return <div className="h-[2000px] text-green-600">hi</div>;
}
