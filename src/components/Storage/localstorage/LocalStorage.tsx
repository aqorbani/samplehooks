"use client";
import React, { useState } from "react";

const LocalStorage = () => {
  const [data, setData] = useState<string>("");
  const [key, setKey] = useState<string>("");

  async function addLocalStorageHandler() {
    localStorage.setItem("test", "ok");
  }

  async function getLocalStorageHandler() {
    setData(localStorage.getItem("test") as string | "");
  }

  async function deleteLocalStorageHandler() {
    localStorage.removeItem("test");
    setData("");
    setKey("");
  }

  async function clearLocalStorageHandler() {
    localStorage.clear();
    setData("");
    setKey("");
  }

  async function getKeyLocalStorageHandler() {
    setKey(localStorage.key(0) as string | "");
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="m-9">Local Storage</p>
      <button
        onClick={addLocalStorageHandler}
        className="m-2 p-3 bg-lime-300 rounded"
      >
        add
      </button>
      <button
        onClick={getLocalStorageHandler}
        className="m-2 p-3 bg-blue-300 rounded"
      >
        get
        {data && <small>({data})</small>}
      </button>
      <button
        onClick={deleteLocalStorageHandler}
        className="m-2 p-3 bg-red-300 rounded"
      >
        delete
      </button>
      <button
        onClick={clearLocalStorageHandler}
        className="m-2 p-3 bg-purple-300 rounded"
      >
        clear local data
      </button>
      <button
        onClick={getKeyLocalStorageHandler}
        className="m-2 p-3 bg-emerald-300 rounded"
      >
        get key 0{key && <small>({key})</small>}
      </button>
    </div>
  );
};

export default LocalStorage;
