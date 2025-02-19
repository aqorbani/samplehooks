"use client";
import React, { useState } from "react";
import { deleteCookie, getCookie, setCookie } from "./Cookies";

const CookieComponent = () => {
  const [cookieName, setCookieName] = useState<string>("");

  async function getCookieHandler() {
    const name: string = (await getCookie("test")) as string;
    setCookieName(name);
  }

  async function deleteCookieHandler() {
    await deleteCookie(cookieName);
    setCookieName("");
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="m-9">Cookies</p>
      <button
        onClick={() => setCookie()}
        className="m-2 p-3 bg-lime-300 rounded"
      >
        add
      </button>
      <button
        onClick={getCookieHandler}
        className="m-2 p-3 bg-blue-300 rounded"
      >
        get
        {cookieName && <small>({cookieName})</small>}
      </button>
      <button
        onClick={deleteCookieHandler}
        disabled={cookieName ? false : true}
        className="m-2 p-3 bg-red-300 rounded"
      >
        delete
      </button>
    </div>
  );
};

export default CookieComponent;
