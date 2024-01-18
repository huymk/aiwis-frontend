import React from "react";

export default async function RegisterPage() {
  return (
    <form className="flex flex-col gap-2 mx-auto max-w-md mt-10">
      <input className="border border-black" type="email"></input>
      <input className="border border-black" type="password"></input>
      <button type="submit">Register</button>
    </form>
  );
}
