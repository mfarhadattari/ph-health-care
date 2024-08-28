"use client";

import { getUserInfo, removeUser } from "@/services/auth.service";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const AuthButton = () => {
  const user = getUserInfo();
  const router = useRouter();
  const handelLogout = () => {
    removeUser();
    toast.info("Logout successful!");
    router.refresh();
  };
  return (
    <>
      {user && user.userId ? (
        <Button variant="outlined" color="error" onClick={handelLogout}>
          Logout
        </Button>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
