"use server";

import { TLoginInputs } from "@/app/login/page";

const loginUser = async (payload: TLoginInputs) => {
  const res = await fetch(`${process.env.SERVER_BASE_API}/auth/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

export default loginUser;
