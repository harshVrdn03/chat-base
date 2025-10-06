import { DashboardLayout, ProtectedLayout } from "@/layouts";
import { DashboardPage } from "@/pages";
import { type RouteObject } from "react-router-dom";

export const dashboardRoutes: RouteObject[] = [
  {
    path: "/dashboard",
    element: (
      <ProtectedLayout>
        <DashboardLayout />
      </ProtectedLayout>
    ),
    children: [
      {
        element: <DashboardPage />,
        index: true,
      },
    ],
  },
];
