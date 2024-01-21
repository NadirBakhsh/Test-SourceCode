import { Icons } from "../Icons";

const sideBarNavRoutes = [
  {
    icon: <Icons.dashboard />,
    title: "Dashboard",
    href: "/dashboard",
    subNavigation: [],
  },
  {
    icon: <Icons.setting />,
    title: "Attendance",
    href: "#",
    subNavigation: [
      {
        title: "Attendance",
        href: "/dashboard/attendance",
      },
      {
        title: "Leave",
        href: "#",
      },
    ],
  },
];

export { sideBarNavRoutes };
