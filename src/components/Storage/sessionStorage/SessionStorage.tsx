"use client";
import React, { useState } from "react";

const SessionStorage = () => {
  const [data, setData] = useState<string>("");
  const [key, setKey] = useState<string>("");

  async function addSessionStorageHandler() {
    sessionStorage.setItem("test", "ok");
  }

  async function getSessionStorageHandler() {
    setData(sessionStorage.getItem("test") as string | "");
  }

  async function deleteSessionStorageHandler() {
    sessionStorage.removeItem("test");
    setData("");
    setKey("");
  }

  async function clearSessionStorageHandler() {
    sessionStorage.clear();
    setData("");
    setKey("");
  }

  async function getKeySessionStorageHandler() {
    setKey(sessionStorage.key(0) as string | "");
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="m-9">Session Storage</p>
      <button
        onClick={addSessionStorageHandler}
        className="m-2 p-3 bg-lime-300 rounded"
      >
        add
      </button>
      <button
        onClick={getSessionStorageHandler}
        className="m-2 p-3 bg-blue-300 rounded"
      >
        get
        {data && <small>({data})</small>}
      </button>
      <button
        onClick={deleteSessionStorageHandler}
        className="m-2 p-3 bg-red-300 rounded"
      >
        delete
      </button>
      <button
        onClick={clearSessionStorageHandler}
        className="m-2 p-3 bg-purple-300 rounded"
      >
        clear local data
      </button>
      <button
        onClick={getKeySessionStorageHandler}
        className="m-2 p-3 bg-emerald-300 rounded"
      >
        get key 0{key && <small>({key})</small>}
      </button>
    </div>
  );
};

export default SessionStorage;
