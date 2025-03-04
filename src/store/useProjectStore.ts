import {ProjectStore} from "../@types/store.ts";
import {create} from "zustand";
import {ChatMessage, MessageFormat} from "../@types/domain.ts";


export const useProjectStore = create<ProjectStore>((set) => ({
  // 현재 과정
  currentStep: 1,
  nextStep: () => set(state => ({currentStep: state.currentStep + 1})),
  prevStep: ()  => set(state => ({currentStep: state.currentStep - 1})),
  // 선택한 토픽
  topic: '',
  updateTopic: (topic: string) => set(() => ({topic})),
  //챗봇메시지
  chatMessage: [],
  updateChatMessage: (messages: ChatMessage[]) => set(state => {
    if (state.chatMessage.length !== messages.length && JSON.stringify(state.chatMessage) !== JSON.stringify(messages)) {
      // console.log("message : ", messages, "chatMessage : ", state.chatMessage);
      return {...state, chatMessage: messages};
    }
    return state;
  }),
  //하이라이트, 취소선
  formattedTexts: [],
  updateChatFormattedTexts: (formattedTexts: MessageFormat[]) => set(state => {
    if (state.formattedTexts.length !== formattedTexts.length && JSON.stringify(state.formattedTexts) !== JSON.stringify(formattedTexts)) {
      return {...state, formattedTexts: formattedTexts};
    }
    return state;
  }),
  //검증데이터
  validData: [],
  addValidData: (validData) => set(state => ({validData: [...state.validData, validData]})),
  removeValidData: (removeData) => set(state => ({validData: state.validData.filter((data) => data !== removeData)})),
}))