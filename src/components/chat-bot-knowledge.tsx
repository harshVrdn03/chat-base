import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckCircle2, Globe, UploadCloud, FileText } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Lightbulb } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Textarea } from "./ui/textarea";

type KnowledgeSource = "url" | "document" | "manual";

const defaultQuestions = [
  "What problem does this chatbot solve?",
  "What tone of voice should it use?",
  "How should it reply if it cannot find an answer?",
];
const knowledgeOptions: Array<{
  id: KnowledgeSource;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}> = [
  {
    id: "url",
    label: "Public URL",
    description: "Let the bot crawl a URL or sitemap to gather knowledge.",
    icon: Globe,
  },
  {
    id: "document",
    label: "PDF / DOCX",
    description: "Upload files to build a private, searchable knowledge base.",
    icon: UploadCloud,
  },
  {
    id: "manual",
    label: "Manual Notes",
    description:
      "Provide custom instructions and FAQs directly in the dashboard.",
    icon: FileText,
  },
];
export default function ChatBotKnowledge() {
  const [knowledgeSource, setKnowledgeSource] =
    React.useState<KnowledgeSource>("url");
  const [knowledgeConfig, setKnowledgeConfig] = React.useState({
    url: "",
    crawlDepth: 2,
    refresh: "weekly",
    documents: [] as string[],
    manual: "",
  });
  const handleKnowledgeConfig = (
    field: "url" | "crawlDepth" | "refresh" | "manual" | "documents",
    value: string | number | string[]
  ) => {
    setKnowledgeConfig((prev) => ({ ...prev, [field]: value }));
  };
  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const files = Array.from(event.target.files).map((file) => file.name);
    setKnowledgeConfig((prev) => ({
      ...prev,
      documents: [...new Set([...prev.documents, ...files])],
    }));
  };
  const resetDocuments = () => {
    setKnowledgeConfig((prev) => ({ ...prev, documents: [] }));
  };
  return (
    <section className="space-y-6">
      <Card className="shadow-none">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg">Knowledge Source</CardTitle>
          <CardDescription>
            Choose how your chatbot accesses information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {knowledgeOptions.map((option) => {
              const Icon = option.icon;
              const selected = knowledgeSource === option.id;
              return (
                <Card
                  key={option.id}
                  className={cn(
                    "cursor-pointer transition-all duration-200 hover:border-primary/50 shadow-none",
                    selected && "border-primary ring-2 ring-primary/20"
                  )}
                  onClick={() => setKnowledgeSource(option.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div
                        className={cn(
                          "flex h-10 w-10 items-center justify-center rounded-lg",
                          selected ? "bg-primary/10" : "bg-muted"
                        )}
                      >
                        <Icon
                          className={cn(
                            "h-5 w-5",
                            selected ? "text-primary" : "text-muted-foreground"
                          )}
                        />
                      </div>
                      <div className="space-y-1 flex-1">
                        <p className="text-sm font-semibold text-foreground">
                          {option.label}
                        </p>
                        <p className="text-xs leading-relaxed text-muted-foreground">
                          {option.description}
                        </p>
                      </div>
                      {selected && (
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Dynamic Configuration Based on Selection */}
      <div className="space-y-4">
        {knowledgeSource === "url" && (
          <Card className="shadow-none">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Website Configuration</CardTitle>
              <CardDescription>
                We'll crawl your website and keep it synced automatically
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 shadow-none">
              <div className="grid gap-3">
                <Label htmlFor="knowledge-url" className="text-sm font-medium">
                  Website URL <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="knowledge-url"
                  value={knowledgeConfig.url}
                  onChange={(event) =>
                    handleKnowledgeConfig("url", event.target.value)
                  }
                  placeholder="https://docs.youware.com"
                  className="h-11"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-3">
                  <Label htmlFor="crawl-depth" className="text-sm font-medium">
                    Crawl depth: {knowledgeConfig.crawlDepth}
                  </Label>
                  <div className="space-y-2">
                    <input
                      id="crawl-depth"
                      type="range"
                      min={1}
                      max={5}
                      value={knowledgeConfig.crawlDepth}
                      onChange={(event) =>
                        handleKnowledgeConfig(
                          "crawlDepth",
                          Number(event.target.value)
                        )
                      }
                      className="w-full accent-primary"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Shallow</span>
                      <span>Deep</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="refresh-schedule"
                    className="text-sm font-medium"
                  >
                    Refresh schedule
                  </Label>
                  <Select
                    value={knowledgeConfig.refresh}
                    onValueChange={(value) =>
                      handleKnowledgeConfig("refresh", value)
                    }
                  >
                    <SelectTrigger className="h-11">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Every day</SelectItem>
                      <SelectItem value="weekly">Every week</SelectItem>
                      <SelectItem value="monthly">Every month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Alert className="bg-primary/5 border-primary/20">
                <Lightbulb className="h-4 w-4 text-primary" />
                <AlertTitle>Pro tip</AlertTitle>
                <AlertDescription>
                  Include a sitemap URL for better coverage and faster indexing.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        )}

        {knowledgeSource === "document" && (
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Document Upload</CardTitle>
              <CardDescription>
                Upload PDF and DOCX files (up to 25 MB each)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div
                className={cn(
                  "flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed p-8 text-center transition-colors",
                  "border-muted bg-muted/20 hover:border-primary/50 hover:bg-primary/5 cursor-pointer"
                )}
                onClick={() =>
                  document.getElementById("knowledge-documents")?.click()
                }
              >
                <UploadCloud className="h-10 w-10 text-primary" />
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">
                    Drop your files here or click to browse
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Supports PDF, DOCX • Max 25 MB per file
                  </p>
                </div>
                <Button type="button" variant="outline" size="sm">
                  Choose Files
                </Button>
                <input
                  id="knowledge-documents"
                  type="file"
                  accept=".pdf,.docx"
                  multiple
                  onChange={handleFileInput}
                  className="hidden"
                />
              </div>

              {knowledgeConfig.documents.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium">
                      Attached files
                    </Label>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={resetDocuments}
                      className="text-destructive hover:text-destructive/90"
                    >
                      Clear all
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {knowledgeConfig.documents.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-lg border bg-background p-3"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">{file}</span>
                        </div>
                        <Badge variant="secondary">Ready</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {knowledgeSource === "manual" && (
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Manual Knowledge Base</CardTitle>
              <CardDescription>
                Add guidelines, scripts, and answers that take priority
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Label
                  htmlFor="manual-knowledge"
                  className="text-sm font-medium"
                >
                  Knowledge Content
                </Label>
                <Textarea
                  id="manual-knowledge"
                  rows={12}
                  value={knowledgeConfig.manual}
                  onChange={(event) =>
                    handleKnowledgeConfig("manual", event.target.value)
                  }
                  placeholder={defaultQuestions.join("\n\n")}
                  className="resize-none font-mono text-sm"
                />
                <p className="text-xs text-muted-foreground">
                  Supports Markdown formatting. Use headings and lists for
                  better organization.
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
