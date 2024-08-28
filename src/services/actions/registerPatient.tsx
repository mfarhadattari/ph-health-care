"use server";

const registerPatient = async (fromData: FormData) => {
  const res = await fetch(`${process.env.SERVER_BASE_API}/user/create-user`, {
    method: "POST",
    body: fromData,
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

export default registerPatient;
