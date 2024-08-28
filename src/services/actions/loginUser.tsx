"use server";

import { FieldValues } from "react-hook-form";

const loginUser = async (payload: FieldValues) => {
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
