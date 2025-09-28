import { BookOpen, Palette, Settings, Sliders } from "lucide-react";
import { useState } from "react";
import ChatBotBuilderOverview from "./chat-bot-builder-overview";
import ChatBotKnowledge from "./chat-bot-knowledge";
import ChatBotBuilderCustomization from "./chat-bot-builder-customization";
import ChatBotBuilderAppearance from "./chat-bot-builder-appearance";
import { StyledTabPanel, StyledTabs } from "./common";

const tabs = [
  { id: "overview", label: "Overview", icon: Settings },
  { id: "knowledge", label: "Knowledge", icon: BookOpen },
  { id: "customization", label: "Customization", icon: Sliders },
  { id: "appearance", label: "Appearance", icon: Palette },
];

export default function ChatBotBuilderInfoTabs() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabsMaps: Record<string, React.ReactNode> = {
    overview: <ChatBotBuilderOverview />,
    knowledge: <ChatBotKnowledge />,
    customization: <ChatBotBuilderCustomization />,
    appearance: <ChatBotBuilderAppearance />,
  };

  return (
    <StyledTabs value={activeTab} onChange={setActiveTab} tabs={tabs}>
      <StyledTabPanel>{tabsMaps[activeTab]}</StyledTabPanel>
    </StyledTabs>
  );
}
