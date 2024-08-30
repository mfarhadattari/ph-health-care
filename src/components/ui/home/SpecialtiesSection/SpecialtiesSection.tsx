import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

type TSpecialty = { id: string; title: string; icon: string };

const SpecialtiesItem = ({ title, icon }: { title: string; icon: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
        backgroundColor: "rgba(245, 245, 245, 1)",
        width: 150,
        height: 150,
        border: "1px solid rgba(255, 255, 255,1)",
        borderRadius: 2,
        "&:hover": {
          border: "1px solid blue",
          borderRadius: 2,
        },
      }}
    >
      <Image src={icon} alt={title} height={40} width={40} />
      <Typography variant="h6" component="h6" fontSize={16} fontWeight={600}>
        {title}
      </Typography>
    </Box>
  );
};

const SpecialtiesSection = async () => {
  const res = await fetch(`${process.env.SERVER_BASE_API}/specialty`, {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();
  const specialties: TSpecialty[] = data.data;
  return (
    <Container
      sx={{
        mt: 30,
      }}
    >
      <Box>
        <Box>
          <Typography variant="h4" component="h4" fontWeight={600}>
            Explore treatment across specialties
          </Typography>
          <Typography component="p" fontSize={18} mt={2}>
            Find experience doctor across all specialties
          </Typography>
        </Box>
      </Box>
      <Box>
        <Stack
          my={5}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          {specialties?.slice(0, 6)?.map((specialty) => (
            <SpecialtiesItem
              key={specialty.id}
              title={specialty.title}
              icon={specialty.icon}
            />
          ))}
        </Stack>
        <Box display="flex" justifyContent="center">
          <Button variant="outlined">View All</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SpecialtiesSection;
