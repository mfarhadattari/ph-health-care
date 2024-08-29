import assets from "@/assets";
import { getUserInfo } from "@/services/auth.service";
import { TUserRole } from "@/types";
import drawerItems from "@/utils/drawerItems";
import { Box, Stack, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const [role, setRole] = useState("");

  useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo) {
      setRole(userInfo.role);
    }
  }, []);

  return (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        gap={2}
        sx={{
          padding: "10px 20px",
        }}
        component={Link}
        href="/"
      >
        <Image src={assets.svgs.logo} alt="Logo" height={50} width={50} />
        <Typography variant="h6" component="h6" fontWeight={600} fontSize={20}>
          PH Health
        </Typography>
      </Stack>
      <Divider />
      <List>
        {drawerItems(role as TUserRole).map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
