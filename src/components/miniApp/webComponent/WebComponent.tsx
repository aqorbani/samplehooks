"use client";
import React, { useEffect } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "button-x": any
    }
  }
}


const WebComponent = () => {
  useEffect(() => {
    // اطمینان از بارگذاری وب کامپوننت‌ها فقط در سمت کلاینت
    import("./Buttonx");
  }, []);

  return (
    <div>
      <h1>Web Component Example: Custom Button</h1>
      <button-x color="green " label="Press Me"></button-x>
    </div>
  );
};
export default WebComponent;
