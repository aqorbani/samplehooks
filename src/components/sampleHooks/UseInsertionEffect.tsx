"use client";
import React, { useInsertionEffect } from "react";

const UseInsertionEffect = () => {
  useInsertionEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
          body {
            color: green;
          }
        `;
    document.head.appendChild(style);

    return () => {
      style.remove();
    };
  }, []);

  return <div>UseInsertionEffect</div>;
};

export default UseInsertionEffect;
