import {ProjectStore} from "../@types/store.ts";
import {create} from "zustand";
import {ChatMessage, MessageFormat} from "../@types/domain.ts";


export const useProjectStore = create<ProjectStore>((set) => ({
  currentStep: 0,
  chatMessage: [],
  updateChatMessage: (messages: ChatMessage[]) => set(state => {
    if (state.chatMessage.length !== messages.length && JSON.stringify(state.chatMessage) !== JSON.stringify(messages)) {
      console.log("message : ", messages, "chatMessage : ",state.chatMessage);
      return {...state, chatMessage: messages};
    }
    return state;
  }),
  formattedTexts: [],
  updateChatFormattedTexts: (formattedTexts: MessageFormat[]) => set(state => {
    if (state.formattedTexts.length !== formattedTexts.length && JSON.stringify(state.formattedTexts) !== JSON.stringify(formattedTexts)) {
      return {...state, formattedTexts: formattedTexts};
    }
    return state;
  })
}))