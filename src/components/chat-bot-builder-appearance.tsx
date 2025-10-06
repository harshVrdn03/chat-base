import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Check,
  ChevronsUpDown,
  Palette,
  Type,
  Image,
  Layout,
  Settings,
} from "lucide-react";
import { Checkbox } from "./ui/checkbox";

interface AppearanceState {
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
  showAvatar: boolean;
  roundedCorners: boolean;
  borderWidth: number;
  borderColor: string;
  widgetPosition: string;
  showLauncher: boolean;
  launcherLabel: string;
  launcherSize: number;
  messageAlignment: string;
  showTimestamps: boolean;
  animationStyle: string;
  shadowIntensity: number;
  opacity: number;
  customCSS: string;
}

export default function ChatBotAppearanceEditor() {
  const [appearance, setAppearance] = useState<AppearanceState>({
    brandColor: "#3b5d50",
    contrastColor: "#fefefe",
    backgroundColor: "#ffffff",
    messageColor: "#f1f5f9",
    userMessageColor: "#3b5d50",
    typeface: "Inter",
    fontSize: 14,
    fontWeight: "normal",
    avatarStyle: "bubble",
    avatarUrl: "",
    showAvatar: true,
    roundedCorners: true,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    widgetPosition: "bottom-right",
    showLauncher: true,
    launcherLabel: "Need product guidance?",
    launcherSize: 56,
    messageAlignment: "left",
    showTimestamps: true,
    animationStyle: "slide",
    shadowIntensity: 20,
    opacity: 100,
    customCSS: "",
  });

  const updateAppearance = (key: keyof AppearanceState, value: any) => {
    setAppearance((prev) => ({ ...prev, [key]: value }));
  };

  const fieldGroups = [
    {
      title: "Colors",
      description: "Define your chatbot's color palette",
      icon: Palette,
      fields: [
        { key: "brandColor", label: "Brand Color", type: "color" },
        { key: "contrastColor", label: "Contrast Color", type: "color" },
        { key: "backgroundColor", label: "Background Color", type: "color" },
        { key: "messageColor", label: "Message Color", type: "color" },
        { key: "userMessageColor", label: "User Message Color", type: "color" },
      ],
    },
    {
      title: "Typography",
      description: "Customize text appearance and style",
      icon: Type,
      fields: [
        {
          key: "typeface",
          label: "Typeface",
          type: "select",
          options: [
            "Inter",
            "Arial",
            "Helvetica",
            "Roboto",
            "Open Sans",
            "Lato",
          ],
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
        },
      ],
    },
    {
      title: "Avatar & Style",
      description: "Customize avatar display and style",
      icon: Image,
      fields: [
        {
          key: "showAvatar",
          label: "Show Avatar",
          type: "switch",
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
        },
      ],
    },
    {
      title: "Widget",
      description: "Configure widget position and launcher",
      icon: Layout,
      fields: [
        {
          key: "showLauncher",
          label: "Show Launcher",
          type: "switch",
        },
        {
          key: "widgetPosition",
          label: "Widget Position",
          type: "select",
          options: ["bottom-right", "bottom-left", "top-right", "top-left"],
        },
        {
          key: "launcherSize",
          label: "Launcher Size",
          type: "slider",
          min: 40,
          max: 80,
          step: 4,
        },
      ],
    },
    {
      title: "Advanced",
      description: "Fine-tune visual effects and styling",
      icon: Settings,
      fields: [
        {
          key: "roundedCorners",
          label: "Rounded Corners",
          type: "switch",
        },
        {
          key: "borderWidth",
          label: "Border Width",
          type: "slider",
          min: 0,
          max: 5,
          step: 1,
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
          key: "customCSS",
          label: "Custom CSS",
          type: "textarea",
        },
      ],
    },
  ];

  const renderField = (field: any) => {
    const value = appearance[field.key as keyof AppearanceState];

    switch (field.type) {
      case "color":
        return (
          <div className="space-y-2">
            <Label>{field.label}</Label>
            <div className="flex gap-2">
              <Input
                type="color"
                value={value as string}
                onChange={(e) => updateAppearance(field.key, e.target.value)}
                className="w-16 h-10 cursor-pointer"
              />
              <Input
                type="text"
                value={value as string}
                onChange={(e) => updateAppearance(field.key, e.target.value)}
                className="flex-1"
              />
            </div>
          </div>
        );

      case "slider":
        return (
          <div className="space-y-2">
            <Label>
              {field.label}: {value}
              {field.unit || ""}
            </Label>
            <Slider
              value={[value as number]}
              min={field.min}
              max={field.max}
              step={field.step}
              onValueChange={(val) => updateAppearance(field.key, val[0])}
            />
          </div>
        );

      case "switch":
        return (
          <div className="flex items-center justify-between">
            <Label htmlFor={field.key}>{field.label}</Label>
            {/* <Checkbox
              id={field.key}
              checked={value as boolean}
              onCheckedChange={(checked) =>
                updateAppearance(field.key, checked)
              }
            /> */}
          </div>
        );

      case "textarea":
        return (
          <div className="space-y-2">
            <Label>{field.label}</Label>
            <textarea
              className="w-full min-h-[80px] p-2 border rounded-md text-sm"
              value={value as string}
              onChange={(e) => updateAppearance(field.key, e.target.value)}
            />
          </div>
        );

      case "text":
      default:
        return (
          <div className="space-y-2">
            <Label>{field.label}</Label>
            <Input
              type="text"
              value={value as string}
              onChange={(e) => updateAppearance(field.key, e.target.value)}
            />
          </div>
        );
    }
  };

  const CommandSelect = ({ field }: { field: any }) => {
    const [open, setOpen] = useState(false);
    const value = appearance[field.key as keyof AppearanceState];

    return (
      <div className="space-y-2">
        <Label>{field.label}</Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              {value}
              <ChevronsUpDown className="h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput placeholder={`Search ${field.label}...`} />
              <CommandList>
                <CommandEmpty>No option found.</CommandEmpty>
                <CommandGroup>
                  {field.options.map((option: string) => (
                    <CommandItem
                      key={option}
                      value={option}
                      onSelect={() => {
                        updateAppearance(field.key, option);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={`mr-2 h-4 w-4 ${
                          value === option ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      {option}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {fieldGroups.map((group, index) => {
        const Icon = group.icon;
        return (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon className="h-5 w-5" />
                {group.title}
              </CardTitle>
              <CardDescription>{group.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {group.fields.map((field) => (
                  <div
                    key={field.key}
                    className={field.type === "textarea" ? "col-span-2" : ""}
                  >
                    {field.type === "select" ? (
                      <CommandSelect field={field} />
                    ) : (
                      renderField(field)
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
