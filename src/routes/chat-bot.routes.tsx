import { ChatBotLayout } from "@/layouts";
import { ChatBotPage, ChatBotNew } from "@/pages";
import type { RouteObject } from "react-router-dom";

export const chatBotRoutes: RouteObject[] = [
  {
    path: "/chat-bot",
    element: <ChatBotLayout />,
    children: [
      {
        element: <ChatBotPage />,
        index: true,
      },
      {
        element: <ChatBotNew />,
        path: "new",
      },
    ],
  },
];
