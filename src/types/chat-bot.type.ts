import type { LucideIcon } from "lucide-react";

export interface AppearanceState {
  brandColor: string;
  contrastColor: string;
  backgroundColor: string;
  messageColor: string;
  userMessageColor: string;
  typeface: string;
  fontSize: number;
  fontWeight: string;
  avatarStyle: string;
  avatarUrl: string;
  showAvatar: string;
  roundedCorners: string;
  borderWidth: number;
  borderColor: string;
  widgetPosition: string;
  showLauncher: string;
  launcherLabel: string;
  launcherSize: number;
  messageAlignment: string;
  showTimestamps: string;
  animationStyle: string;
  shadowIntensity: number;
  opacity: number;
  customCSS: string;
}

export interface AppearanceField {
  key: string;
  label: string;
  type: "color" | "select" | "slider" | "text" | "textarea";
  options?: string[];
  min?: number;
  max?: number;
  step?: number;
}

export interface ChatbotAppearanceSection {
  title: string;
  description: string;
  icon: LucideIcon;
  fields: AppearanceField[];
}
