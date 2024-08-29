export type TUserRole = "SUPER_ADMIN" | "ADMIN" | "DOCTOR" | "PATIENT";

export type TAuthPayload = {
  userId: string;
  email: string;
  role: TUserRole;
  iat: number;
  exp: number;
};
