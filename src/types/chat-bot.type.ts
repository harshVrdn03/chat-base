import type { LucideIcon } from "lucide-react";

export type FieldType =
  | "color"
  | "select"
  | "slider"
  | "switch"
  | "text"
  | "textarea";

export interface BaseField {
  key: string;
  label: string;
  type: FieldType;
  description?: string;
  placeholder?: string;
}

export interface ColorField extends BaseField {
  type: "color";
}

export interface SelectField extends BaseField {
  type: "select";
  options: string[];
}

export interface SliderField extends BaseField {
  type: "slider";
  min: number;
  max: number;
  step: number;
  unit?: string;
}

export interface SwitchField extends BaseField {
  type: "switch";
  description: string;
}

export interface TextField extends BaseField {
  type: "text";
  placeholder?: string;
}

export interface TextareaField extends BaseField {
  type: "textarea";
  placeholder?: string;
}

export type ConfigField =
  | ColorField
  | SelectField
  | SliderField
  | SwitchField
  | TextField
  | TextareaField;

export interface ConfigSection {
  title: string;
  description: string;
  icon: LucideIcon;
  fields: ConfigField[];
}

export interface ChatbotAppearanceSections {
  colors: ConfigSection;
  typography: ConfigSection;
  avatar: ConfigSection;
  widget: ConfigSection;
  messages: ConfigSection;
  advanced: ConfigSection;
}

export interface ChatbotAppearanceValues {
  brandColor: string;
  contrastColor: string;
  backgroundColor: string;
  messageColor: string;
  userMessageColor: string;
  borderColor: string;

  typeface: string;
  fontWeight: string;
  fontSize: number;
  showAvatar: boolean;
  avatarStyle: string;
  avatarUrl: string;

  showLauncher: boolean;
  widgetPosition: string;
  launcherLabel: string;
  launcherSize: number;

  showTimestamps: boolean;
  messageAlignment: string;
  animationStyle: string;

  roundedCorners: boolean;
  borderWidth: number;
  shadowIntensity: number;
  opacity: number;
  customCSS: string;
}
