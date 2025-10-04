import { AppLayout } from "@/layouts";
import { HomePage, LoginPage, OnBoardingPage, RegisterPage } from "@/pages";
import { createBrowserRouter } from "react-router-dom";
import { dashboardRoutes } from "./dashboard.routes";
import { builderRoutes } from "./builder.routes";
import { chatBotRoutes } from "./chat-bot.routes";

export const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        element: <OnBoardingPage />,
        path: "/on-boarding",
      },
    ],
  },
  ...dashboardRoutes,
  ...builderRoutes,
  ...chatBotRoutes,
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);
