import { TUserRole } from "@/types";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

//icons
import { USER_ROLE, USER_ROLE_PATH } from "@/const/role";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ReviewsIcon from "@mui/icons-material/Reviews";
import TryIcon from "@mui/icons-material/Try";

export type TDrawerItem = {
  title: string;
  path: string;
  parentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  child?: TDrawerItem[];
};

const drawerItems = (role: TUserRole): TDrawerItem[] => {
  const menuItems: TDrawerItem[] = [];

  switch (role) {
    case USER_ROLE.SUPER_ADMIN:
      menuItems.push(
        {
          title: "Dashboard",
          path: `${USER_ROLE_PATH.SUPER_ADMIN}`,
          icon: DashboardIcon,
        },
        {
          title: "Manage Users",
          path: `${USER_ROLE_PATH.SUPER_ADMIN}/manage-users`,
          icon: GroupIcon,
        }
      );
      break;

    case USER_ROLE.ADMIN:
      menuItems.push(
        {
          title: "Dashboard",
          path: `${USER_ROLE_PATH.ADMIN}`,
          icon: DashboardIcon,
        },
        {
          title: "Specialties",
          path: `${USER_ROLE_PATH.ADMIN}/specialties`,
          icon: TryIcon,
        },
        {
          title: "Doctors",
          path: `${USER_ROLE_PATH.ADMIN}/doctors`,
          icon: MedicalInformationIcon,
        },
        {
          title: "Schedules",
          path: `${USER_ROLE_PATH.ADMIN}/schedules`,
          icon: CalendarMonthIcon,
        },
        {
          title: "Appointments",
          path: `${USER_ROLE_PATH.ADMIN}/appointments`,
          icon: BookOnlineIcon,
        },
        {
          title: "Reviews",
          path: `${USER_ROLE_PATH.ADMIN}/reviews`,
          icon: ReviewsIcon,
        }
      );
      break;

    case USER_ROLE.DOCTOR:
      menuItems.push(
        {
          title: "Dashboard",
          path: `${USER_ROLE_PATH.DOCTOR}`,
          icon: DashboardIcon,
        },
        {
          title: "Schedules",
          path: `${USER_ROLE_PATH.DOCTOR}/schedules`,
          icon: CalendarMonthIcon,
        },
        {
          title: "Appointments",
          path: `${USER_ROLE_PATH.DOCTOR}/appointments`,
          icon: BookOnlineIcon,
        }
      );
      break;

    case USER_ROLE.PATIENT:
      menuItems.push(
        {
          title: "Dashboard",
          path: `${USER_ROLE_PATH.PATIENT}`,
          icon: DashboardIcon,
        },
        {
          title: "Appointments",
          path: `${USER_ROLE_PATH.PATIENT}/appointments`,
          icon: BookOnlineIcon,
        },
        {
          title: "Prescriptions",
          path: `${USER_ROLE_PATH.PATIENT}/prescriptions`,
          icon: ReceiptLongIcon,
        },
        {
          title: "Payment History",
          path: `${USER_ROLE_PATH.PATIENT}/payment-history`,
          icon: AttachMoneyIcon,
        }
      );
      break;

    default:
      break;
  }

  return menuItems;
};

export default drawerItems;
