import ChatBotBuilderInfo from "./chat-bot-builder-info";
import ChatBotBuilderInfoTabs from "./chat-bot-builder-info-tabs";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { chatBotSchema, type ChatBotFormData } from "@/validations";
import { ChatBotEvents, emitter } from "@/events";
import { useEffect, useCallback } from "react";

const defaultValues: ChatBotFormData = {
  name: "",
  description: "",
  knowledge: { type: null },
  conversation: {},
  suggestions: [],
};

export const ChatBotBuilder = () => {
  const form = useForm<ChatBotFormData>({
    resolver: zodResolver(chatBotSchema),
    defaultValues,
  });

  const onSubmit = useCallback((data: ChatBotFormData) => {
    console.log("✅ Chatbot form submitted:", data);
  }, []);

  const onCreate = useCallback(() => {
    form.handleSubmit(onSubmit)();
  }, [form, onSubmit]);

  const onUpdate = useCallback(() => {
    console.log("✅ Chatbot form updated:", form.getValues());
  }, [form]);

  useEffect(() => {
    emitter.on(ChatBotEvents.CHATBOT_CREATE, onCreate);
    emitter.on(ChatBotEvents.CHATBOT_UPDATE, onUpdate);

    return () => {
      emitter.off(ChatBotEvents.CHATBOT_CREATE, onCreate);
      emitter.off(ChatBotEvents.CHATBOT_UPDATE, onUpdate);
    };
  }, [onCreate, onUpdate]);

  return (
    <FormProvider {...form}>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex h-full w-full flex-col"
      >
        <ChatBotBuilderInfo />
        <ChatBotBuilderInfoTabs />
      </form>
    </FormProvider>
  );
};
