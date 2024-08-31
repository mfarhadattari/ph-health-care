"use client";

import { Box, Button, Stack, TextField } from "@mui/material";
import * as React from "react";
import CreateSchedulesModel from "./components/CreateSchedulesModel";

const SchedulesPage = () => {
  const [modelOpen, setModelOpen] = React.useState<boolean>(false);
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        {/* ----------------- Model Section --------------- */}
        <Button onClick={() => setModelOpen(true)}>Create Schedules</Button>
        <CreateSchedulesModel open={modelOpen} setOpen={setModelOpen} />

        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          placeholder="Search Schedules"
        />
      </Stack>
      <Box>
        <h1>Schedules Data</h1>
      </Box>
    </Box>
  );
};

export default SchedulesPage;
