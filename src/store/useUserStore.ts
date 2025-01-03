import {create} from 'zustand';
import {UserStore} from "../@types/store.ts";

export const useUserStore = create<UserStore>( set => ({
  user: {id:'adb123',name:'hellorin',gender:'m',age:12},
  increaseAge: () => set(state => ({user: {...state.user, age: state.user.age + 1}})),
  removeAge: () => set(state => ({user: {...state.user, age: 0}})),
}))