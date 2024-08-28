import assets from "@/assets";
import howitimg from "@/assets/how-it-works-img.png";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const solutionSteps = [
  {
    icon: assets.svgs.doctorSearch,
    title: "Search Doctor",
    description:
      "Ut qui ad magna aute sit proident sint aute qui mollit nulla est.",
  },
  {
    icon: assets.svgs.profile,
    title: "Check Doctor Profile",
    description:
      "Ut qui ad magna aute sit proident sint aute qui mollit nulla est.",
  },
  {
    icon: assets.svgs.schedule,
    title: "Schedule Appointment",
    description:
      "Ut qui ad magna aute sit proident sint aute qui mollit nulla est.",
  },
  {
    icon: assets.svgs.care,
    title: "Get Your Solution",
    description:
      "Ut qui ad magna aute sit proident sint aute qui mollit nulla est.",
  },
];

const HowItSection = () => {
  return (
    <Container
      sx={{
        mt: 16,
      }}
    >
      <Box>
        <Typography
          color="primary"
          variant="h6"
          component="h1"
          fontWeight={700}
        >
          How it Works
        </Typography>
        <Typography variant="h4" component="h1" fontWeight={700}>
          4 Steps to Get Your Solution
        </Typography>
        <Typography component="p" fontSize={18} mt={2} width="50%">
          Access to expert physician and surgeon, advanced technologies and top
          quality surgery facilities right here
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={2} mt={5}>
          <Grid item xs={6}>
            <Image src={howitimg} alt="doctor image" />
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              {solutionSteps.map((item, idx) => (
                <Grid item xs={6} key={idx}>
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      border: "1px solid lightgray",
                      borderRadius: "10px",
                      padding: "20px",
                    }}
                  >
                    <Image src={item.icon} alt={item.title} />
                    <Typography
                      variant="h6"
                      component="h2"
                      fontWeight={500}
                      mt={3}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      component="p"
                      fontSize={14}
                      fontWeight={400}
                      sx={{ mt: 1 }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HowItSection;
