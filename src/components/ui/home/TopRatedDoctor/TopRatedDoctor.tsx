import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";

type TDoctor = {
  id: string;
  email: string;
  name: string;
  profilePhoto: string;
  contactNumber: string;
  address: string;
  registrationNumber: string;
  experience: string;
  gender: string;
  appointmentFee: string;
  qualification: string;
  currentWorkingPlace: string;
  designation: string;
  averageRating: number;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  doctorSpecialty?: [];
};

const TopRatedDoctor = async () => {
  const res = await fetch(
    `${process.env.SERVER_BASE_API}/doctor?page=1&limit=3`,
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const { data: doctors = [] } = await res.json();

  return (
    <Box
      sx={{
        my: 10,
        py: 30,
        backgroundColor: "rgba(20, 20, 20, 0.1)",
        clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)",
      }}
    >
      <Box>
        <Box>
          <Typography
            variant="h4"
            component="h4"
            fontWeight={600}
            textAlign="center"
          >
            Our Top Rated Doctors
          </Typography>
          <Typography
            component="p"
            fontSize={18}
            textAlign="center"
            mt={2}
            width="50%"
            mx="auto"
          >
            Access to expert physician and surgeon, advanced technologies and
            top quality surgery facilities right here
          </Typography>
        </Box>
      </Box>
      <Container
        sx={{
          margin: "30px auto",
        }}
      >
        <Grid container spacing={2}>
          {doctors.map((doctor: TDoctor) => (
            <Grid item key={doctor.id} md={4}>
              <Card>
                <Box>
                  <Image
                    src={doctor.profilePhoto}
                    alt={doctor.name}
                    width={500}
                    height={500}
                  />
                </Box>
                <CardContent>
                  <Typography variant="h5" component="h5" fontWeight={600}>
                    {doctor.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="primary.body"
                    fontWeight={500}
                    mt={1}
                  >
                    {doctor.qualification}, {doctor.designation}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="primary.body"
                    fontWeight={500}
                    mt={1}
                  >
                    <LocationOnOutlinedIcon /> {doctor.address}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    justifyContent: "space-between",
                    margin: "10px 0",
                  }}
                >
                  <Button
                    sx={{
                      width: "100%",
                    }}
                  >
                    Book Now
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      width: "100%",
                    }}
                  >
                    View Profile
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box display="flex" justifyContent="center" my={5}>
          <Button variant="outlined">View All Doctors</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TopRatedDoctor;
