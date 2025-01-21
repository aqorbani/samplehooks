import { useState } from "react";

type UserData = {
  name: string;
  email?: string;
  age: number;
  status: boolean;
};
// New State

const UseState = () => {
  //   const [name, setName] = useState<string>("John Doe");

  const [user, setUser] = useState<UserData>({
    name: "Johnn Doe",
    age: 12,
    status: true,
  });

  return <div>{user.name}</div>;
};

export default UseState;
