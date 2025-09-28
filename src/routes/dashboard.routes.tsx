import { DashboardLayout } from "@/layouts";
import { HomePage } from "@/pages";
import { type RouteObject } from "react-router-dom";

export const dashboardRoutes: RouteObject[] = [
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
    ],
  },
];
