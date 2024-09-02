"use client";

import PHForm from "@/components/form/PHForm";
import PHInput from "@/components/form/PHInput";
import PHSelect from "@/components/form/PHSelect";
import Loaders from "@/components/shared/Loader/Loader";
import { GENDER } from "@/const/user";
import {
  useGetDoctorDetailsQuery,
  useUpdateDoctorMutation,
} from "@/redux/api/doctorApi";
import { Box, Button, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const DoctorEditPage = ({ params }: any) => {
  const id = params.doctorId;
  const router = useRouter();
  const { data, isLoading } = useGetDoctorDetailsQuery(id);

  const [updateDoctor] = useUpdateDoctorMutation();
  const handelUpdateDoctor = async (values: FieldValues) => {
    values.appointmentFee = Number(values.appointmentFee);
    values.experience = Number(values.experience);
    try {
      const res = await updateDoctor({ id, data: values }).unwrap();
      if (res.id) {
        toast.success("Doctor updated successfully.");
        router.push("/dashboard/admin/doctors");
      } else {
        toast.error("Something went wrong.");
      }
    } catch (err: any) {
      toast.error(err.message);
      console.log(err);
    }
  };

  const doctorDefaultValue = {
    email: data?.email || "",
    name: data?.name || "",
    contactNumber: data?.contactNumber || "",
    address: data?.address || "",
    registrationNumber: data?.registrationNumber || "",
    gender: data?.gender || "",
    experience: data?.experience || 0,
    appointmentFee: data?.appointmentFee || 0,
    qualification: data?.qualification || "",
    currentWorkingPlace: data?.currentWorkingPlace || "",
    designation: data?.designation || "",
  };

  return (
    <Box>
      {isLoading ? (
        <Loaders />
      ) : (
        <PHForm
          onSubmit={handelUpdateDoctor}
          defaultValues={doctorDefaultValue}
        >
          <Grid container spacing={2} sx={{ my: 5 }}>
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <PHInput
                name="name"
                label="Name"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <PHInput
                name="email"
                type="email"
                label="Email"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={3}>
              <PHInput
                name="contactNumber"
                label="Contract Number"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={3}>
              <PHInput
                name="address"
                label="Address"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <PHInput
                name="registrationNumber"
                label="Registration Number"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <PHInput
                name="experience"
                type="number"
                label="Experience"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <PHSelect
                items={GENDER}
                name="gender"
                label="Gender"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={3}>
              <PHInput
                name="appointmentFee"
                type="number"
                label="Appointment Fee"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <PHInput
                name="qualification"
                label="Qualification"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <PHInput
                name="currentWorkingPlace"
                label="Current Working Place"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <PHInput
                name="designation"
                label="Designation"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              sx={{
                width: "200px",
              }}
              type="submit"
            >
              Update
            </Button>
          </Box>
        </PHForm>
      )}
    </Box>
  );
};

export default DoctorEditPage;
