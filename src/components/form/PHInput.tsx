import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TPHInput = {
  name: string;
  label: string;
  type?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  required: boolean;
  placeholder?: string;
};

const PHInput = ({
  name,
  label,
  type = "text",
  size = "small",
  fullWidth,
  sx,
  required,
  placeholder,
}: TPHInput) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          sx={{ ...sx }}
          variant="outlined"
          size={size}
          required={required}
          fullWidth={fullWidth}
          placeholder={placeholder || label}
        />
      )}
    />
  );
};

export default PHInput;
