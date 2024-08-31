import PHDatePicker from "@/components/form/PHDatePicker";
import PHForm from "@/components/form/PHForm";
import PHTimePicker from "@/components/form/PHTimePicker";
import PHModel from "@/components/shared/PHModel/PHModel";
import { TSchedule } from "@/types";
import { formatDate, formatTime } from "@/utils/datetime";
import { Button, Grid } from "@mui/material";
import * as React from "react";
import { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const scheduleDefaultValue: TSchedule = {
  startDate: "",
  endDate: "",
  startTime: "",
  endTime: "",
};

const CreateSchedulesModel = ({ open, setOpen }: TProps) => {
  const handelCreateSchedules = async (values: FieldValues) => {
    values.startDate = formatDate(values.startDate);
    values.endDate = formatDate(values.endDate);
    values.startTime = formatTime(values.startTime);
    values.endTime = formatTime(values.endTime);
    console.log(values);
  };

  return (
    <PHModel open={open} setOpen={setOpen} title="Create Schedules">
      <PHForm
        onSubmit={handelCreateSchedules}
        defaultValues={scheduleDefaultValue}
      >
        <Grid
          container
          spacing={2}
          sx={{
            padding: 3,
            width: "400px",
          }}
        >
          <Grid item md={12}>
            <PHDatePicker name="startDate" label="Start Date" />
          </Grid>
          <Grid item md={12}>
            <PHDatePicker name="endDate" label="End Date" />
          </Grid>
          <Grid item md={6}>
            <PHTimePicker name="startTime" label="Start Time" />
          </Grid>
          <Grid item md={6}>
            <PHTimePicker name="endTime" label="End Time" />
          </Grid>
          <Grid item md={12}>
            <Button type="submit">Create Schedules</Button>
          </Grid>
        </Grid>
      </PHForm>
    </PHModel>
  );
};

export default CreateSchedulesModel;
