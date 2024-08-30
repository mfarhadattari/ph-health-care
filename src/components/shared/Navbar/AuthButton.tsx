"use client";

import { getUserInfo, removeUser } from "@/services/auth.service";
import { Button, Stack } from "@mui/material";
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
        <Stack direction="row" gap={1}>
          <Button component={Link} href="/dashboard">
            Dashboard
          </Button>
          <Button variant="outlined" color="error" onClick={handelLogout}>
            Logout
          </Button>
        </Stack>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
