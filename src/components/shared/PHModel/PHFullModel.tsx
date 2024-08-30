import CloseIcon from "@mui/icons-material/Close";
import { DialogContent, DialogTitle, SxProps } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import * as React from "react";
import { BootstrapDialog } from "./PHModel";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type TPHFullModel = {
  title?: string;
  children: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sx?: SxProps;
};

const PHFullModel = ({
  title,
  children,
  open = false,
  setOpen,
  sx,
}: TPHFullModel) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        fullScreen
        onClose={handleClose}
        aria-labelledby="ph-full-model-title"
        open={open}
        sx={{ ...sx }}
        TransitionComponent={Transition}
      >
        <DialogTitle
          sx={{ color: "primary.main", background: "#f4f7fe" }}
          id="ph-full-model-title"
        >
          {title}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{ mx: 1 }}>{children}</DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
};

export default PHFullModel;
