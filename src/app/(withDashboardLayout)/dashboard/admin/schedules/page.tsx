"use client";

import Loaders from "@/components/shared/Loader/Loader";
import {
  useDeleteScheduleMutation,
  useGetSchedulesQuery,
} from "@/redux/api/scheduleApi";
import { TSchedule } from "@/types";
import { getDateTime } from "@/utils/datetime";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import * as React from "react";
import { toast } from "sonner";
import CreateSchedulesModel from "./components/CreateSchedulesModel";

const SchedulesPage = () => {
  const [modelOpen, setModelOpen] = React.useState<boolean>(false);
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  const { data, isLoading } = useGetSchedulesQuery({});
  const [schedules, setSchedule] = React.useState<TSchedule[]>([]);
  

  React.useEffect(() => {
    if (!isLoading && data?.schedules) {
      const modifiedSchedules = data?.schedules?.map(
        (item): TSchedule => ({
          id: item.id,
          startDate: getDateTime(item.startDateTime).date,
          endDate: getDateTime(item.endDateTime).date,
          startTime: getDateTime(item.startDateTime).time,
          endTime: getDateTime(item.endDateTime).time,
        })
      );

      setSchedule(modifiedSchedules);
    }
  }, [data, isLoading]);

  /* ------------------ Delete Schedule --------------- */
  const [deleteSchedule] = useDeleteScheduleMutation();

  const handleDelete = async (id: string) => {
    try {
      await deleteSchedule(id);
      toast.success("Doctor deleted successfully.");
    } catch (err) {
      toast.error("Something went wrong.");
      console.error(err);
    }
  };

  const columns: GridColDef[] = [
    { field: "startDate", headerName: "Start Date", flex: 1 },
    { field: "endDate", headerName: "End Date", flex: 1 },
    { field: "startTime", headerName: "Start Time", flex: 1 },
    { field: "endTime", headerName: "End Time", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton
            color="error"
            onClick={() => handleDelete(row.id)}
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

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
        {isLoading ? (
          <Loaders />
        ) : (
          <Box my={2}>
            <DataGrid
              rows={schedules}
              columns={columns}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SchedulesPage;
