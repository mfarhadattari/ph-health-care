"use client";

import PHFileUpload from "@/components/form/PHFileUpload";
import PHForm from "@/components/form/PHForm";
import PHInput from "@/components/form/PHInput";
import PHSelect from "@/components/form/PHSelect";
import PHFullModel from "@/components/shared/PHModel/PHFullModel";
import { GENDER } from "@/const/user";
import { useCreateDoctorMutation } from "@/redux/api/doctorApi";
import modifyToFormData from "@/utils/modifyToFormData";
import { Box, Button, Grid } from "@mui/material";
import * as React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const doctorDefaultValue = {
  password: "",
  doctor: {
    email: "",
    name: "",
    contactNumber: "",
    address: "",
    registrationNumber: "",
    gender: "",
    experience: 0,
    appointmentFee: 0,
    qualification: "",
    currentWorkingPlace: "",
    designation: "",
    profilePhoto: "",
  },
};

const CreateDoctorModel = ({ open, setOpen }: TProps) => {
  const [createDoctor] = useCreateDoctorMutation();
  const handelCreateDoctor = async (values: FieldValues) => {
    values.doctor.appointmentFee = Number(values.doctor.appointmentFee);
    values.doctor.experience = Number(values.doctor.experience);
    const data = modifyToFormData(values);
    try {
      const res = await createDoctor(data).unwrap();
      console.log(res);
      if (res.id) {
        toast.success("Doctor created successfully.");
      } else {
        toast.success("Something went wrong.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <PHFullModel open={open} setOpen={setOpen} title="Create a Doctor">
      <PHForm onSubmit={handelCreateDoctor} defaultValues={doctorDefaultValue}>
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <PHInput
              name="doctor.name"
              label="Name"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <PHInput
              name="doctor.email"
              type="email"
              label="Email"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <PHInput
              name="password"
              type="password"
              label="Password"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <PHInput
              name="doctor.contactNumber"
              label="Contract Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={3}>
            <PHInput
              name="doctor.address"
              label="Address"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <PHInput
              name="doctor.registrationNumber"
              label="Registration Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <PHInput
              name="doctor.experience"
              type="number"
              label="Experience"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <PHSelect
              items={GENDER}
              name="doctor.gender"
              label="Gender"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={3}>
            <PHInput
              name="doctor.appointmentFee"
              type="number"
              label="Appointment Fee"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <PHInput
              name="doctor.qualification"
              label="Qualification"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <PHInput
              name="doctor.currentWorkingPlace"
              label="Current Working Place"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <PHInput
              name="doctor.designation"
              label="Designation"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <PHFileUpload
              name="file"
              label="Profile Photo"
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
            Create
          </Button>
        </Box>
      </PHForm>
    </PHFullModel>
  );
};

export default CreateDoctorModel;
