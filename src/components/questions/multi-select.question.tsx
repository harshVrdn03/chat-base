import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import type {
  BaseOnBoardingQuestionProp,
  OnBoardingMultiSelectQuestion,
} from "@/types";
import QuestionBottonNavInfo from "./question-botton-nav-info";

interface MultiSelectQuestionProps
  extends BaseOnBoardingQuestionProp<OnBoardingMultiSelectQuestion> {
  value: string[];
}

export function MultiSelectQuestion({
  question,
  value,
  onChange,
  onNext,
  questionNumber = 1,
}: MultiSelectQuestionProps) {
  const [focusIndex, setFocusIndex] = useState(0);

  const toggleOption = (id: string) => {
    if (value.includes(id)) {
      onChange(value.filter((v: string) => v !== id));
    } else {
      onChange([...value, id] as string[]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setFocusIndex((prev) => (prev + 1) % question.options.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setFocusIndex(
          (prev) =>
            (prev - 1 + question.options.length) % question.options.length
        );
      } else if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        toggleOption(question.options[focusIndex].id);
      } else if (e.key === "Enter" && e.shiftKey) {
        e.preventDefault();
        onNext?.();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [focusIndex, question.options, value, onNext]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-6">
      <div className="w-full max-w-3xl space-y-12">
        {/* Question Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-xl  font-medium text-muted-foreground">
              {questionNumber}
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="text-2xl  md:text-3xl font-bold text-foreground leading-tight">
            {question.title}
          </h2>
          <p className="text-base text-muted-foreground mt-2">
            {question?.description}
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid gap-4">
          {question?.options?.map((opt, index) => {
            const selected = value.includes(opt.id);
            const letter = String.fromCharCode(65 + index);
            const focused = focusIndex === index;

            return (
              <button
                key={opt.id}
                onClick={() => toggleOption(opt.id)}
                className={cn(
                  "group relative w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ease-out cursor-pointer outline-none",
                  "hover:border-primary hover:shadow-lg hover:-translate-y-0.5",
                  selected
                    ? "border-primary bg-primary/10 shadow-md"
                    : "border-border bg-card",
                  focused && "ring-2 ring-primary"
                )}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={cn(
                      "flex-shrink-0 size-7 rounded-lg flex items-center justify-center font-semibold text-sm transition-all duration-200",
                      selected
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground group-hover:bg-accent group-hover:text-accent-foreground"
                    )}
                  >
                    {selected ? <Check className="w-5 h-5" /> : letter}
                  </div>

                  <span
                    className={cn(
                      "text-sm md:text-base font-medium transition-colors duration-200",
                      selected
                        ? "text-foreground"
                        : "text-muted-foreground group-hover:text-foreground"
                    )}
                  >
                    {opt.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <QuestionBottonNavInfo questionType={question.type} />
      </div>
    </div>
  );
}
