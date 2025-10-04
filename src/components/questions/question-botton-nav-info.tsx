import type { EOnBoardingQuestionType } from "@/enums";

type QuestionBottonNavInfoProps = {
  questionType: EOnBoardingQuestionType;
};

export default function QuestionBottonNavInfo({
  questionType,
}: QuestionBottonNavInfoProps) {
  return (
    <div className="flex items-center justify-between text-sm text-muted-foreground pt-4">
      <div className="flex items-center gap-2">
        <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">↑</kbd>
        <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">↓</kbd>
        <span>to navigate</span>
      </div>
      <div className="flex items-center gap-2">
        <span>Press</span>
        <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">
          Enter
        </kbd>
        <span>to select / deselect</span>
      </div>
      <div className="flex items-center gap-2">
        <span>Press</span>
        <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">
          Shift + Enter
        </kbd>
        <span>to continue</span>
      </div>
    </div>
  );
}
