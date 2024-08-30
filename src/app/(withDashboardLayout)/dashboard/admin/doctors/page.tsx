"use client";

import Loaders from "@/components/shared/Loader/Loader";
import {
  useDeleteDoctorMutation,
  useGetDoctorsQuery,
} from "@/redux/api/doctorApi";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import * as React from "react";
import { toast } from "sonner";
import CreateDoctorModel from "./components/CreateDoctorModel";

const DoctorsPage = () => {
  const [modelOpen, setModelOpen] = React.useState<boolean>(false);
  const { data, isLoading } = useGetDoctorsQuery({});
  const [deleteDoctor] = useDeleteDoctorMutation();

  const handleDelete = async (id: string) => {
    try {
      await deleteDoctor(id);
      toast.success("Doctor deleted successfully.");
    } catch (err) {
      toast.error("Something went wrong.");
      console.error(err);
    }
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "contactNumber", headerName: "Contact Number", flex: 1 },
    { field: "qualification", headerName: "Qualification", flex: 1 },
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
        <Button onClick={() => setModelOpen(true)}>Create Doctor</Button>
        <CreateDoctorModel open={modelOpen} setOpen={setModelOpen} />

        <TextField size="small" placeholder="Search doctor" />
      </Stack>
      <Box>
        {isLoading ? (
          <Loaders />
        ) : (
          <Box my={2}>
            <DataGrid rows={data?.doctors || []} columns={columns} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default DoctorsPage;
