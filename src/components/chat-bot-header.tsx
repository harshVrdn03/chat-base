import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function ChatBotHeader() {
  const navigate = useNavigate();

  const handleCreateChatBot = () => {
    navigate("/chat-bot/new");
  };
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">Chat Bot</h1>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="default" onClick={handleCreateChatBot}>
            Create Your First Chat Bot
            <ArrowRight />
          </Button>
        </div>
      </div>
    </header>
  );
}
