"use server";
import { cookies } from "next/headers";

async function setCookie() {
  const cookieStore = await cookies();
  cookieStore.set("test", "ok");
  console.log("added");
}

async function getCookie(cookieName: string) {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(cookieName);
  return cookie?.name;
}

async function deleteCookie(cookieName: string) {
  try {
    const cookieStore = await cookies();
    cookieStore.delete(cookieName);
    return true;
  } catch (error) {
    return false;
  }
}

export { setCookie, getCookie, deleteCookie };
