"use client";

import Loaders from "@/components/shared/Loader/Loader";
import {
  useDeleteSpecialtyMutation,
  useGetSpecialtiesQuery,
} from "@/redux/api/specialtyApi";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import CreateSpecialtyModel from "./components/CreateSpecialtyModel";

const SpecialtiesPage = () => {
  const [isModelOpen, setIsModelOpen] = useState<boolean>(false);
  const { data: specialties = [], isLoading } = useGetSpecialtiesQuery({});
  const [deleteSpecialty] = useDeleteSpecialtyMutation();

  const handleDelete = async (id: string) => {
    try {
      await deleteSpecialty(id);
      toast.success("Specialty deleted successfully!");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong!");
    }
  };

  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 400 },
    {
      field: "icon",
      headerName: "Icon",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box py={1}>
            <Image src={row.icon} width={30} height={30} alt="icon" />
          </Box>
        );
      },
    },
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
        <Button onClick={() => setIsModelOpen(true)}>Create Specialty</Button>
        <CreateSpecialtyModel open={isModelOpen} setOpen={setIsModelOpen} />
        <TextField size="small" placeholder="Search Specialties" />
      </Stack>
      <Box>
        {isLoading ? (
          <Loaders />
        ) : (
          <Box my={2}>
            <DataGrid rows={specialties} columns={columns} hideFooter={true} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SpecialtiesPage;
