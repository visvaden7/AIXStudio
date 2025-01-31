import {ChatMessage, MessageFormat} from "./domain.ts";

export interface User {
  id: string;
  name: string;
  gender: string;
  age: number;
}

export interface UserStore {
  user: User;
  increaseAge: () => void;
  removeAge: () => void;
}

export interface ProjectStore {
  currentStep: number;
  chatMessage: ChatMessage[];
  updateChatMessage: (messages: ChatMessage[]) => void;
  formattedTexts: MessageFormat[]
  updateChatFormattedTexts: (formattedTexts: MessageFormat[]) => void;
}