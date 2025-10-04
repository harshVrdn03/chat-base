"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type {
  BaseOnBoardingQuestionProp,
  OnBoardingTextQuestion,
} from "@/types";
import QuestionBottonNavInfo from "./question-botton-nav-info";
import { useEffect, useRef } from "react";

interface OpenEndedQuestionProps
  extends BaseOnBoardingQuestionProp<OnBoardingTextQuestion> {
  value: string;
}

export function OpenEndedQuestion({
  question,
  value,
  onChange,
  questionNumber = 1,
  onNext,
}: OpenEndedQuestionProps) {
  const ref = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter" && e.shiftKey) {
      e.preventDefault();
      onNext?.();
    }
  };

  useEffect(() => {
    ref.current?.focus();
  }, [question.id]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-6">
      <div className="w-full max-w-3xl space-y-12">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-medium text-muted-foreground">
              {questionNumber}
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            {question.title}
          </h2>
        </div>

        <div className="">
          {question.multiline ? (
            <Textarea
              ref={ref as React.RefObject<HTMLTextAreaElement>}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={question.placeholder}
              className="min-h-[150px] text-lg rounded-xl border border-border bg-card text-foreground focus-visible:ring-2 focus-visible:ring-primary transition-all"
            />
          ) : (
            <Input
              ref={ref as React.RefObject<HTMLInputElement>}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={question.placeholder}
              className="h-14 text-lg rounded-xl border border-border bg-card text-foreground focus-visible:ring-2 focus-visible:ring-primary transition-all"
            />
          )}
        </div>

        <QuestionBottonNavInfo questionType={question.type} />
      </div>
    </div>
  );
}
