"use client";

import Loaders from "@/components/shared/Loader/Loader";
import {
  useDeleteDoctorScheduleMutation,
  useGetDoctorSchedulesQuery,
} from "@/redux/api/doctorApi";
import { TSchedule } from "@/types";
import { getDateTime } from "@/utils/datetime";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import SelectDoctorSchedulesModel from "./components/SelectDoctorSchedulesModel";

const DoctorSchedulesPage = () => {
  const [modelOpen, setModelOpen] = useState<boolean>(false);

  const { data, isLoading } = useGetDoctorSchedulesQuery({});

  const [schedules, setSchedule] = useState<TSchedule[]>([]);
  useEffect(() => {
    if (!isLoading && data) {
      const modifiedSchedules = data?.map((item: any) => ({
        id: item.scheduleId,
        startDate: getDateTime(item.schedule.startDateTime).date,
        endDate: getDateTime(item.schedule.endDateTime).date,
        startTime: getDateTime(item.schedule.startDateTime).time,
        endTime: getDateTime(item.schedule.endDateTime).time,
        status: item.isBooked === true ? "Booked" : "Open",
      }));

      setSchedule(modifiedSchedules);
    }
  }, [data, isLoading]);

  /* ------------------ Delete Schedule --------------- */
  const [deleteDoctorSchedule] = useDeleteDoctorScheduleMutation();
  const handleDelete = async (id: string) => {
    try {
      await deleteDoctorSchedule(id);
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
    { field: "status", headerName: "Status", flex: 1 },
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
        <SelectDoctorSchedulesModel open={modelOpen} setOpen={setModelOpen} />

        <TextField size="small" placeholder="Search Schedules" />
      </Stack>
      <Box>
        {isLoading ? (
          <Loaders />
        ) : (
          <Box my={2}>
            <DataGrid rows={schedules} columns={columns} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default DoctorSchedulesPage;
