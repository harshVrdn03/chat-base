import ChatBotBuilderInfo from "./chat-bot-builder-info";
import ChatBotBuilderInfoTabs from "./chat-bot-builder-info-tabs";

export const ChatBotBuilder = () => {
  return (
    <div className="flex h-full w-full flex-col gap-4">
      <ChatBotBuilderInfo />
      <ChatBotBuilderInfoTabs />
    </div>
  );
};
