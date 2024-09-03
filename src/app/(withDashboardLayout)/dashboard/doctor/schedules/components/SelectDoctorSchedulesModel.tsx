"use client";

import PHModel from "@/components/shared/PHModel/PHModel";
import { useCreateDoctorSchedulesMutation } from "@/redux/api/doctorApi";
import { useGetSchedulesQuery } from "@/redux/api/scheduleApi";
import { formatDate, getDateTime } from "@/utils/datetime";
import { Button, Stack } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import * as React from "react";
import { toast } from "sonner";
import SchedulesSelector from "./SchedulesSelector";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SelectDoctorSchedulesModel = ({ open, setOpen }: TProps) => {
  const [selectedDate, setSelectedDate] = React.useState(dayjs(Date.now()));
  const [options, setOptions] = React.useState<any[]>([]);
  const [selectedScheduleIds, setSelectedScheduleIds] = React.useState<
    string[]
  >([]);
  const query: Record<string, any> = {};
  query["startDate"] = formatDate(selectedDate);
  query["endDate"] = formatDate(dayjs(selectedDate).hour(24));
  const { data, isLoading } = useGetSchedulesQuery(query);

  React.useEffect(() => {
    if (!isLoading && data && data?.schedules) {
      const modifiedOptions = data?.schedules?.map((schedule) => ({
        value: schedule.id,
        label: `${getDateTime(schedule.startDateTime).time}-${
          getDateTime(schedule.endDateTime).time
        }`,
      }));
      setOptions(modifiedOptions.reverse());
    }
  }, [selectedDate, data, isLoading]);

  const [createDoctorSchedules] = useCreateDoctorSchedulesMutation();

  const handelSelectSchedules = async () => {
    try {
      const res = await createDoctorSchedules({
        schedules: selectedScheduleIds,
      }).unwrap();
      if (res.length > 0) {
        toast.success("Doctor schedules created successfully");
        setOpen(false);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PHModel
      open={open}
      setOpen={setOpen}
      title="Select Schedules"
      sx={{
        width: "400px",
        margin: "0 auto",
      }}
    >
      <Stack
        spacing={2}
        sx={{
          padding: 2,
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Select date"
            format="DD/MM/YYYY"
            timezone="system"
            value={selectedDate}
            onChange={(date) => setSelectedDate(dayjs(date))}
            slotProps={{
              textField: {
                size: "small",
                variant: "outlined",
                fullWidth: true,
              },
            }}
          />
        </LocalizationProvider>
        <SchedulesSelector
          options={options}
          selected={selectedScheduleIds}
          setSelected={setSelectedScheduleIds}
        />
        <Button onClick={handelSelectSchedules}>Select Schedules</Button>
      </Stack>
    </PHModel>
  );
};

export default SelectDoctorSchedulesModel;
