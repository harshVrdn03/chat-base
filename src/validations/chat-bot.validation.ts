import z from "zod";

export const knowledgeSchema = z.object({
  url: z.string().optional(),
  files: z.array(z.string()).optional(),
  manual: z.string().optional(),
  type: z.number().nullable().optional(),
});

export const chatBotConversationSchema = z.object({
  showWelcomeMessage: z.boolean().optional(),
  welcomeMessage: z.string().optional(),
  emailCapture: z.boolean().optional(),
  phoneNumberCapture: z.boolean().optional(),
  fallbackMessage: z.string().optional(),
});

export const chatBotSuggestionSchema = z.array(z.string()).optional();

export const chatBotSchema = z.object({
  name: z.string().min(3, "Name is required and must be at least 3 characters"),
  description: z.string().optional(),
  knowledge: knowledgeSchema,
  suggestions: chatBotSuggestionSchema,
  conversation: chatBotConversationSchema,
  theme: z.record(z.string(), z.any()).optional(),
});

export type ChatBotFormData = z.infer<typeof chatBotSchema>;
