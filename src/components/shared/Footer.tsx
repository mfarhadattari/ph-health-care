import facebookIcon from "@/assets/landing_page/facebook.png";
import instagramIcon from "@/assets/landing_page/instagram.png";
import linkedIcon from "@/assets/landing_page/linkedin.png";
import twitterIcon from "@/assets/landing_page/twitter.png";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 26, 34)" py={5}>
      <Container>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={4}
        >
          <Typography color="#fff" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="#fff" component={Link} href="/health-plan">
            Health Plan
          </Typography>
          <Typography color="#fff" component={Link} href="/medicine">
            Medicine
          </Typography>
          <Typography color="#fff" component={Link} href="/diagnostics">
            Diagnostics
          </Typography>
          <Typography color="#fff" component={Link} href="/ngos">
            NGOs
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={2}
          py={3}
        >
          <Link href="https://facebook.com" target="_blank">
            <Image src={facebookIcon} width={30} height={30} alt="facebook" />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <Image src={instagramIcon} width={30} height={30} alt="instagram" />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <Image src={twitterIcon} width={30} height={30} alt="twitter" />
          </Link>
          <Link href="https://linked.com" target="_blank">
            <Image src={linkedIcon} width={30} height={30} alt="linked" />
          </Link>
        </Stack>
        <Box
          sx={{
            border: "1px dashed lightgray",
          }}
        ></Box>
        <Stack
          direction="row"
          gap={2}
          justifyContent="space-between"
          alignItems="center"
          py={3}
        >
          <Typography component="p" color="white">
            &copy;2024 PH HealthCare. All Rights Reserved.
          </Typography>
          <Typography
            variant="h4"
            component={Link}
            href="/"
            fontWeight={600}
            color="white"
          >
            P
            <Box component="span" color="primary.main">
              H
            </Box>{" "}
            Health Care
          </Typography>
          <Typography component="p" color="white">
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
