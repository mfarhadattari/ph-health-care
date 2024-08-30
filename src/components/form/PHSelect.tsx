import { MenuItem, SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TPHSelect = {
  name: string;
  label: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  required?: boolean;
  placeholder?: string;
  items: string[];
};

const PHSelect = ({
  name,
  label,
  size = "small",
  fullWidth,
  sx,
  required,
  placeholder,
  items,
}: TPHSelect) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          select
          sx={{ ...sx }}
          variant="outlined"
          size={size}
          required={required}
          fullWidth={fullWidth}
          placeholder={placeholder || label}
          error={!!error?.message}
          helperText={error?.message}
        >
          {items.map((item) => (
            <MenuItem key={item} value={item} sx={{
                textTransfrom: 'uppercase'
            }}>
              {item}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};

export default PHSelect;
