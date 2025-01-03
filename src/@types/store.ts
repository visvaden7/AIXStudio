
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