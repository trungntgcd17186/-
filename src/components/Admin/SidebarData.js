import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AddIcon from "@mui/icons-material/Add";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FeedbackIcon from "@mui/icons-material/Feedback";
import LogoutIcon from "@mui/icons-material/Logout";

export const SidebarData = [
  {
    title: "Dashboard",
    icon: <HomeIcon />,
    link: "/dashboard",
  },
  {
    title: "Products",
    icon: <ShoppingBagIcon />,
    link: "/dashboard/products",
  },
  {
    title: "Category",
    icon: <CategoryIcon />,
    link: "/dashboard/categories",
  },
  {
    title: "Orders",
    icon: <ShoppingCartIcon />,
    link: "/dashboard/orders",
  },
  {
    title: "Users",
    icon: <AccountCircleIcon />,
    link: "/dashboard/users",
  },
  {
    title: "Feedbacks",
    icon: <FeedbackIcon />,
    link: "/dashboard/feedbacks",
  },
  {
    title: "Import",
    icon: <AddIcon />,
    link: "/dashboard/import",
  },
  {
    title: "Logout",
    icon: <LogoutIcon />,
    link: "/login",
  },
];

// export default SidebarData;
