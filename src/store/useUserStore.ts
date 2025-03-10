import {create} from 'zustand';
import {UserStore} from "../@types/store.ts";

export const useUserStore = create<UserStore>( set => ({
  user: {id:'',name:'',email:'',memberType:''},
  loginMember: (userId, memberType) => set(state => ({user: {...state.user, id: userId, memberType: memberType}})),
  increaseAge: () => set(state => ({user: {...state.user, }})),
  removeAge: () => set(state => ({user: {...state.user, }})),
}))