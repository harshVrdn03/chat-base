import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Circle } from "lucide-react";
import { useState } from "react";
import { Separator } from "./ui/separator";

export default function ChatBotBuilderOverview() {
  const [botName, setBotName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <section className="grid gap-6 w-full">
      <div className="space-y-6">
        <Card className="shadow-none">
          <CardHeader className="pb-0">
            <CardTitle className="text-lg">Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 shadow-none">
            <div className="grid gap-3">
              <Label htmlFor="bot-name" className="text-sm font-medium">
                Chatbot name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="bot-name"
                placeholder="Ex: YouWare Concierge"
                value={botName}
                onChange={(event) => setBotName(event.target.value)}
                maxLength={60}
                className="h-11"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>This appears on your widget and dashboard</span>
                <span>{botName.length}/60</span>
              </div>
            </div>

            <div className="grid gap-3">
              <Label htmlFor="bot-description" className="text-sm font-medium">
                Description
              </Label>
              <Textarea
                id="bot-description"
                placeholder="Summarize what your chatbot helps with..."
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                rows={4}
                className="resize-none"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-none">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              Quick setup checklist
            </CardTitle>
            <CardDescription>
              Follow these tips to create an effective chatbot
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-3 text-sm">
              {[
                "Keep instructions short and actionable",
                "Add sample questions so users know where to begin",
                "Review fallback reply to keep conversations open",
                "Test with different user scenarios",
                "Set up proper knowledge sources",
              ].map((tip, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full border border-primary/20">
                    {index < 2 ? (
                      <CheckCircle2 className="h-3 w-3 text-primary" />
                    ) : (
                      <Circle className="h-3 w-3 text-muted-foreground/40" />
                    )}
                  </div>
                  <span
                    className={
                      index < 2 ? "text-foreground" : "text-muted-foreground"
                    }
                  >
                    {tip}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
