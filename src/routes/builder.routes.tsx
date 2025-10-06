import { BuilderLayout, ProtectedLayout } from "@/layouts";
import { BuilderPage } from "@/pages";
import type { RouteObject } from "react-router-dom";

export const builderRoutes: RouteObject[] = [
  {
    path: "/builder",
    element: (
      <ProtectedLayout>
        <BuilderLayout />
      </ProtectedLayout>
    ),
    children: [
      {
        element: <BuilderPage />,
        index: true,
      },
    ],
  },
];
