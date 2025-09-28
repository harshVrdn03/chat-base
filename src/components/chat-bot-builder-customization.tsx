import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Switch } from "./ui/switch";
import { Textarea } from "./ui/textarea";
import { Info, Lightbulb, Plus, X } from "lucide-react";

export default function ChatBotBuilderCustomization() {
  const [welcomeEnabled, setWelcomeEnabled] = useState(true);
  const [welcomeMessage, setWelcomeMessage] = useState(
    "Hi there! I'm your new assistant. Ask me anything."
  );
  const [suggestedQuestions, setSuggestedQuestions] = useState<string[]>([
    "What can you do?",
    "Show me quick tips",
  ]);
  const [captureEmail, setCaptureEmail] = useState(false);
  const [fallbackResponse, setFallbackResponse] = useState(
    "I'm still learning. Let me collect this and follow up shortly."
  );

  const addQuestion = () => {
    setSuggestedQuestions((prev) => [...prev, ""]);
  };

  const removeQuestion = (index: number) => {
    setSuggestedQuestions((prev) =>
      prev.filter((_, questionIndex) => questionIndex !== index)
    );
  };

  const handleQuestionChange = (index: number, value: string) => {
    setSuggestedQuestions((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <Card className="shadow-none">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg">Conversation Settings</CardTitle>
          <CardDescription>
            Configure how your chatbot interacts with users
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-sm font-medium">Welcome message</Label>
                <p className="text-xs text-muted-foreground">
                  Show when the widget opens
                </p>
              </div>
              <Switch
                checked={welcomeEnabled}
                onCheckedChange={setWelcomeEnabled}
              />
            </div>

            {welcomeEnabled && (
              <div className="space-y-3">
                <Label
                  htmlFor="welcome-message"
                  className="text-sm font-medium"
                >
                  Message content
                </Label>
                <Textarea
                  id="welcome-message"
                  rows={3}
                  value={welcomeMessage}
                  onChange={(event) => setWelcomeMessage(event.target.value)}
                  placeholder="Hello! How can I help you today?"
                  className="resize-none"
                />
              </div>
            )}
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-sm font-medium">
                  Suggested questions
                </Label>
                <p className="text-xs text-muted-foreground">
                  Help users get started
                </p>
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addQuestion}
                disabled={suggestedQuestions.length >= 5}
              >
                <Plus className="h-4 w-4 mr-1" />
                Add
              </Button>
            </div>

            <div className="space-y-3">
              {suggestedQuestions.map((question, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input
                    value={question}
                    onChange={(event) =>
                      handleQuestionChange(index, event.target.value)
                    }
                    placeholder={`Suggested question ${index + 1}`}
                    className="h-9"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeQuestion(index)}
                    disabled={suggestedQuestions.length <= 1}
                    className="h-9 w-9 text-muted-foreground hover:text-destructive"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-none">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg">Advanced Settings</CardTitle>
          <CardDescription>
            Fine-tune chatbot behavior and fallback options
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-sm font-medium">Email capture</Label>
                <p className="text-xs text-muted-foreground">
                  Ask for email when needed
                </p>
              </div>
              <Switch
                checked={captureEmail}
                onCheckedChange={setCaptureEmail}
              />
            </div>

            {captureEmail && (
              <Alert className="bg-blue-50 border-blue-200">
                <Info className="h-4 w-4 text-blue-600" />
                <AlertTitle>Email capture enabled</AlertTitle>
                <AlertDescription>
                  The chatbot will ask for email when it detects high-intent
                  questions.
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div className="space-y-3">
            <Label htmlFor="fallback-message" className="text-sm font-medium">
              Fallback response
            </Label>
            <Textarea
              id="fallback-message"
              rows={4}
              value={fallbackResponse}
              onChange={(event) => setFallbackResponse(event.target.value)}
              placeholder="I'm not sure about that. Could you please rephrase your question?"
              className="resize-none"
            />
            <p className="text-xs text-muted-foreground">
              This message shows when the chatbot doesn't understand the
              question.
            </p>
          </div>

          <Alert className="bg-amber-50 border-amber-200">
            <Lightbulb className="h-4 w-4 text-amber-600" />
            <AlertTitle>Best practice</AlertTitle>
            <AlertDescription>
              Include your brand voice and next steps so users feel supported
              even when the bot is unsure.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </section>
  );
}
