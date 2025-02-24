import {ChatMessage, MessageFormat} from "./domain.ts";

export interface User {
  id: string;
  name: string;
  email: string;
  memberType: string;
}

export interface UserStore {
  user: User;
  loginMember: (userId: string, memberType: string) => void;
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