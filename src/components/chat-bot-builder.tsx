import ChatBotBuilderInfo from "./chat-bot-builder-info";
import ChatBotBuilderInfoTabs from "./chat-bot-builder-info-tabs";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { chatBotSchema, type ChatBotFormData } from "@/validations";

export const ChatBotBuilder = () => {
  const form = useForm<ChatBotFormData>({
    resolver: zodResolver(chatBotSchema),
    defaultValues: {
      name: "",
      description: "",
      knowledge: {
        type: null,
      },
    },
  });
  const formValues = useWatch({
    control: form.control,
  });

  console.log(formValues, "987");

  // const onSubmit = (data: ChatBotFormData) => {
  //   console.log(data);
  // };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex h-full w-full flex-col"
      >
        <ChatBotBuilderInfo />
        <ChatBotBuilderInfoTabs />
        {/* <button type="button" onClick={form.handleSubmit(onSubmit)}>
          Submit
        </button> */}
      </form>
    </FormProvider>
  );
};
