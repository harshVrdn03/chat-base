import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Eye } from "lucide-react";
import { Badge } from "./ui/badge";
type AvatarStyle = "bubble" | "minimal" | "floating";
type WidgetPosition = "bottom-right" | "bottom-left" | "inline";
type TypefaceOption = "Inter" | "Sohne" | "Grotesk";

const avatarStyles = [
  { value: "bubble", label: "Bubble" },
  { value: "minimal", label: "Minimal" },
  { value: "floating", label: "Floating" },
];

const widgetPositions = [
  { value: "bottom-right", label: "Bottom Right" },
  { value: "bottom-left", label: "Bottom Left" },
  { value: "inline", label: "Inline" },
];

const typefaces = [
  { value: "Inter", label: "Inter" },
  { value: "Sohne", label: "Sohne" },
  { value: "Grotesk", label: "Grotesk" },
];

export default function ChatBotBuilderAppearance() {
  const [botName] = useState("AI");
  const [brandColor, setBrandColor] = useState("#3b5d50");
  const [contrastColor, setContrastColor] = useState("#fefefe");
  const [launcherLabel, setLauncherLabel] = useState("Need product guidance?");
  const [avatarStyle, setAvatarStyle] = useState<AvatarStyle>("bubble");
  const [widgetPosition, setWidgetPosition] =
    useState<WidgetPosition>("bottom-right");
  const [typeface, setTypeface] = useState<TypefaceOption>("Inter");
  const [suggestedQuestions] = useState<string[]>([
    "What can you do?",
    "Show me quick tips",
  ]);
  const [welcomeEnabled] = useState(true);
  const [welcomeMessage] = useState(
    "Hi there! I'm your new assistant. Ask me anything."
  );

  return (
    <section className="grid gap-6 lg:grid-cols-[1fr_400px]">
      <div className="space-y-6">
        <Card className="shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg">Visual Identity</CardTitle>
            <CardDescription>
              Customize colors, typography, and widget appearance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-3">
                <Label htmlFor="brand-color" className="text-sm font-medium">
                  Brand color
                </Label>
                <div className="flex items-center gap-3">
                  <input
                    id="brand-color"
                    type="color"
                    value={brandColor}
                    onChange={(event) => setBrandColor(event.target.value)}
                    className="h-10 w-10 cursor-pointer rounded-lg border border-border"
                  />
                  <Input
                    value={brandColor}
                    onChange={(event) => setBrandColor(event.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="contrast-color" className="text-sm font-medium">
                  Text color
                </Label>
                <div className="flex items-center gap-3">
                  <input
                    id="contrast-color"
                    type="color"
                    value={contrastColor}
                    onChange={(event) => setContrastColor(event.target.value)}
                    className="h-10 w-10 cursor-pointer rounded-lg border border-border"
                  />
                  <Input
                    value={contrastColor}
                    onChange={(event) => setContrastColor(event.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="launcher-label" className="text-sm font-medium">
                Launcher label
              </Label>
              <Input
                id="launcher-label"
                value={launcherLabel}
                onChange={(event) => setLauncherLabel(event.target.value)}
                placeholder="Need help?"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-3">
                <Label className="text-sm font-medium">Avatar style</Label>
                <RadioGroup
                  value={avatarStyle}
                  onValueChange={(value) =>
                    setAvatarStyle(value as AvatarStyle)
                  }
                  className="space-y-2"
                >
                  {avatarStyles.map((style) => (
                    <div
                      key={style.value}
                      className="flex items-center space-x-2"
                    >
                      <RadioGroupItem value={style.value} id={style.value} />
                      <Label
                        htmlFor={style.value}
                        className="text-sm font-normal"
                      >
                        {style.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label className="text-sm font-medium">Typography</Label>
                <Select
                  value={typeface}
                  onValueChange={(value) =>
                    setTypeface(value as TypefaceOption)
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {typefaces.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  {typefaces.find((t) => t.value === typeface)?.value}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <Label className="text-sm font-medium">Widget position</Label>
              <div className="grid grid-cols-3 gap-2">
                {widgetPositions.map((position) => (
                  <Button
                    key={position.value}
                    type="button"
                    variant={
                      widgetPosition === position.value ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() =>
                      setWidgetPosition(position.value as WidgetPosition)
                    }
                    className="h-11"
                  >
                    {position.label}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-none">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg flex items-center gap-2">
            <Eye className="h-5 w-5 text-primary" />
            Live Preview
          </CardTitle>
          <CardDescription>
            See how your chatbot will look to users
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div
            className="space-y-4 rounded-2xl bg-white p-6 shadow-xl border"
            style={{ fontFamily: typeface }}
          >
            {/* Chat Header */}
            <div className="flex items-center gap-3">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl text-base font-bold shadow-sm"
                style={{
                  background: brandColor,
                  color: contrastColor,
                }}
              >
                {botName ? botName.charAt(0).toUpperCase() : "AI"}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {botName || "New Assistant"}
                </p>
                <p className="text-xs text-gray-500">
                  {launcherLabel || "Chat with us"}
                </p>
              </div>
            </div>

            {/* Welcome Message */}
            {welcomeEnabled && (
              <div
                className="rounded-2xl px-4 py-3 text-sm text-gray-700 shadow-sm border"
                style={{
                  borderColor: brandColor + "20",
                  background: brandColor + "08",
                }}
              >
                {welcomeMessage || "Hello! How can I help you today?"}
              </div>
            )}

            {/* Suggested Questions */}
            <div className="space-y-2">
              {suggestedQuestions.slice(0, 3).map((question, index) => (
                <button
                  key={index}
                  type="button"
                  className="w-full rounded-xl border border-gray-200 px-3 py-2 text-left text-xs text-gray-600 transition-all hover:border-gray-300 hover:shadow-sm"
                >
                  {question || "Sample question " + (index + 1)}
                </button>
              ))}
            </div>

            {/* Position Indicator */}
            <div className="flex justify-center pt-4">
              <Badge variant="secondary" className="text-xs">
                Position: {widgetPosition.replace("-", " ")}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
