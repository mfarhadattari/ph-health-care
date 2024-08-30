"use client";

import { Box, Button, Stack, TextField } from "@mui/material";
import * as React from "react";
import CreateDoctorModel from "./components/CreateDoctorModel";

const DoctorsPage = () => {
  const [modelOpen, setModelOpen] = React.useState<boolean>(false);

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        {/* ----------------- Model Section --------------- */}
        <Button onClick={() => setModelOpen(true)}>Create Doctor</Button>
        <CreateDoctorModel open={modelOpen} setOpen={setModelOpen} />

        <TextField size="small" placeholder="Search doctor" />
      </Stack>
      <Box>
        <h1>Doctor List</h1>
      </Box>
    </Box>
  );
};

export default DoctorsPage;
