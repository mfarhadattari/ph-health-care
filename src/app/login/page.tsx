"use client";
import assets from "@/assets";
import PHForm from "@/components/form/PHForm";
import PHInput from "@/components/form/PHInput";
import { storeUserInfo } from "@/services/auth.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import loginUser from "../../services/actions/loginUser";

export const LoginValidationSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

const LoginPage = () => {
  const router = useRouter();

  const onLogin: SubmitHandler<FieldValues> = async (values) => {
    try {
      const result = await loginUser(values);
      if (result.success && result.data.accessToken) {
        toast.success(result.message);
        storeUserInfo(result.data.accessToken);
        router.push("/");
      } else {
        toast.error(result.message);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image src={assets.svgs.logo} width={50} height={50} alt="logo" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Login PH Health Care
              </Typography>
            </Box>
          </Stack>
          <Box>
            <PHForm
              onSubmit={onLogin}
              resolver={zodResolver(LoginValidationSchema)}
              defaultValues={{
                email: "",
                password: "",
              }}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={6}>
                  <PHInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Typography component="p" fontWeight={300} textAlign="end" my={2}>
                Forget Password?
              </Typography>
              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                Login
              </Button>
              <Typography component="p" fontWeight={300}>
                Don&apos;t have any account?{" "}
                <Link href="/register">Create Account</Link>
              </Typography>
            </PHForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
