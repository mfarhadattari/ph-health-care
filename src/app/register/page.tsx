"use client";

import assets from "@/assets";
import PHForm from "@/components/form/PHForm";
import PHInput from "@/components/form/PHInput";
import registerPatient from "@/services/actions/registerPatient";
import modifyToFormData from "@/utils/modifyToFormData";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const RegisterPage = () => {
  const router = useRouter();

  const onRegister: SubmitHandler<FieldValues> = async (values) => {
    const data = modifyToFormData(values);
    try {
      const result = await registerPatient(data);
      if (result.success) {
        toast.success(result.message);
        router.push("/login");
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
                Patient Register
              </Typography>
            </Box>
          </Stack>
          <Box>
            <PHForm onSubmit={onRegister}>
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <PHInput label="Name" fullWidth={true} name="patient.name" />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    label="Email"
                    name="patient.email"
                    type="email"
                    fullWidth={true}
                    required={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    label="Password"
                    name="password"
                    type="password"
                    fullWidth={true}
                    required={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    label="Contact Number"
                    name="patient.contactNumber"
                    type="tel"
                    fullWidth={true}
                    required={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    label="Address"
                    name="patient.address"
                    fullWidth={true}
                    required={true}
                  />
                </Grid>
              </Grid>
              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                Register
              </Button>
              <Typography component="p" fontWeight={300}>
                Do you already have an account? <Link href="/login">Login</Link>
              </Typography>
            </PHForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
