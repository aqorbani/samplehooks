"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { submitForm } from "./action";

const UseFormStatus = () => {
  return <Form action={submitForm} />;
};

function Submit() {
  const { pending, data, method, action } = useFormStatus();
  console.log(pending);
  console.log(data);
  console.log(method);
  console.log(action);
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

function Form({ action }: { action: any }) {
  return (
    <form action={action}>
      <Submit />
    </form>
  );
}

export default UseFormStatus;
