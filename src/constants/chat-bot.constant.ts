import type { ChatbotAppearanceSections } from "@/types";
import {
  Palette,
  Type,
  Image,
  Layout,
  MessageSquare,
  Settings,
} from "lucide-react";

export const chatBotAppearanceSections: ChatbotAppearanceSections = {
  colors: {
    title: "Colors",
    description: "Define your chatbot's color palette",
    icon: Palette,
    fields: [
      { key: "brandColor", label: "Brand Color", type: "color" },
      { key: "contrastColor", label: "Contrast Color", type: "color" },
      { key: "backgroundColor", label: "Background Color", type: "color" },
      { key: "messageColor", label: "Message Color", type: "color" },
      { key: "userMessageColor", label: "User Message Color", type: "color" },
      { key: "borderColor", label: "Border Color", type: "color" },
    ],
  },
  typography: {
    title: "Typography",
    description: "Customize text appearance and style",
    icon: Type,
    fields: [
      {
        key: "typeface",
        label: "Typeface",
        type: "select",
        options: ["Inter", "Arial", "Helvetica", "Roboto", "Open Sans", "Lato"],
      },
      {
        key: "fontWeight",
        label: "Font Weight",
        type: "select",
        options: ["light", "normal", "medium", "semibold", "bold"],
      },
      {
        key: "fontSize",
        label: "Font Size",
        type: "slider",
        min: 12,
        max: 20,
        step: 1,
        unit: "px",
      },
    ],
  },
  avatar: {
    title: "Avatar & Style",
    description: "Customize avatar display and style",
    icon: Image,
    fields: [
      {
        key: "showAvatar",
        label: "Show Avatar",
        type: "switch",
        description: "Display avatar in chat messages",
      },
      {
        key: "avatarStyle",
        label: "Avatar Style",
        type: "select",
        options: ["bubble", "square", "rounded"],
      },
      {
        key: "avatarUrl",
        label: "Avatar URL",
        type: "text",
        placeholder: "https://example.com/avatar.png",
      },
    ],
  },
  widget: {
    title: "Widget",
    description: "Configure widget position and launcher",
    icon: Layout,
    fields: [
      {
        key: "showLauncher",
        label: "Show Launcher",
        type: "switch",
        description: "Display the chat launcher button",
      },
      {
        key: "widgetPosition",
        label: "Widget Position",
        type: "select",
        options: ["bottom-right", "bottom-left", "top-right", "top-left"],
      },
      { key: "launcherLabel", label: "Launcher Label", type: "text" },
      {
        key: "launcherSize",
        label: "Launcher Size",
        type: "slider",
        min: 40,
        max: 80,
        step: 4,
        unit: "px",
      },
    ],
  },
  messages: {
    title: "Messages",
    description: "Configure message appearance and behavior",
    icon: MessageSquare,
    fields: [
      {
        key: "showTimestamps",
        label: "Show Timestamps",
        type: "switch",
        description: "Display time for each message",
      },
      {
        key: "messageAlignment",
        label: "Message Alignment",
        type: "select",
        options: ["left", "right", "center"],
      },
      {
        key: "animationStyle",
        label: "Animation Style",
        type: "select",
        options: ["slide", "fade", "none"],
      },
    ],
  },
  advanced: {
    title: "Advanced",
    description: "Fine-tune visual effects and styling",
    icon: Settings,
    fields: [
      {
        key: "roundedCorners",
        label: "Rounded Corners",
        type: "switch",
        description: "Apply rounded corners to elements",
      },
      {
        key: "borderWidth",
        label: "Border Width",
        type: "slider",
        min: 0,
        max: 5,
        step: 1,
        unit: "px",
      },
      {
        key: "shadowIntensity",
        label: "Shadow Intensity",
        type: "slider",
        min: 0,
        max: 50,
        step: 5,
      },
      {
        key: "opacity",
        label: "Opacity",
        type: "slider",
        min: 50,
        max: 100,
        step: 5,
        unit: "%",
      },
      {
        key: "customCSS",
        label: "Custom CSS",
        type: "textarea",
        placeholder: "/* Add custom CSS here */",
      },
    ],
  },
};
