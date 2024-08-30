"use client";

import PHFileUpload from "@/components/form/PHFileUpload";
import PHForm from "@/components/form/PHForm";
import PHInput from "@/components/form/PHInput";
import PHModel from "@/components/shared/PHModel/PHModel";
import { useCreateSpecialtyMutation } from "@/redux/api/specialtyApi";
import modifyToFormData from "@/utils/modifyToFormData";
import { Box, Button } from "@mui/material";
import * as React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateSpecialtyModel = ({ open, setOpen }: TProps) => {
  const [createSpecialty, res] = useCreateSpecialtyMutation();

  const handelCreateSpecialty = async (values: FieldValues) => {
    if (!values || !values.title || !values.file) {
      return toast.error("Invalid input");
    }
    const data = modifyToFormData(values);
    try {
      const result = await createSpecialty(data).unwrap();
      if (result.id) {
        setOpen(false);
        toast.success("Specialty created");
      } else {
        toast.error("Something went wrong");
      }
    } catch (err: any) {
      toast.error(err.message);
    }
  };
  return (
    <PHModel open={open} setOpen={setOpen} title="Create A Specialty">
      <PHForm
        onSubmit={handelCreateSpecialty}
        defaultValues={{
          title: "",
          file: null,
        }}
      >
        <Box
          my={1}
          sx={{
            padding: 3,
            width: "300px",
          }}
        >
          <Box>
            <PHInput name="title" label="Title" fullWidth={true} />
          </Box>
          <Box my={1}>
            <PHFileUpload name="file" label="Upload Icon" fullWidth={true} />
          </Box>
          <Box>
            <Button
              sx={{
                margin: "10px 0px",
              }}
              fullWidth={true}
              type="submit"
            >
              Create Specialty
            </Button>
          </Box>
        </Box>
      </PHForm>
    </PHModel>
  );
};

export default CreateSpecialtyModel;
