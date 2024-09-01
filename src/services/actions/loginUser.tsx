import { FieldValues } from "react-hook-form";

const loginUser = async (payload: FieldValues) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_API}/auth/login`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
      credentials: "include",
    }
  );
  const data = await res.json();
  return data;
};

export default loginUser;
