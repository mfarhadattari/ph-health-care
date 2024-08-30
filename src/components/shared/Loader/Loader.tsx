import Loading from "@/components/ui/loading/Loading/Loading";
import { Box } from "@mui/material";

const Loaders = () => {
  return (
    <Box
      sx={{
        height: "300px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loading />
    </Box>
  );
};

export default Loaders;
