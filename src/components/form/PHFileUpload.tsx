import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Button, Input, SxProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TPHFileUpload = {
  name: string;
  label: string;
  fullWidth?: boolean;
  sx?: SxProps;
};

const PHFileUpload = ({ name, label, fullWidth, sx }: TPHFileUpload) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ...field } }) => (
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          fullWidth={fullWidth}
          sx={{ ...sx }}
        >
          {label || "Upload File"}
          <Input
            {...field}
            type="file"
            style={{ display: "none" }}
            value={value?.fileName}
            onChange={(e) =>
              onChange((e.target as HTMLInputElement)?.files?.[0])
            }
          />
        </Button>
      )}
    />
  );
};

export default PHFileUpload;
