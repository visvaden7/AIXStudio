import axios from "axios";
import {AxiosResponseLogin} from "../@types/api.ts";

export const login = async (id: string, pw: string, type: number) => {
  try {
    const formData = new FormData();
    formData.append("user_id", id);
    formData.append("user_pw", pw);
    formData.append('member_type', `${type}`);
    const response = await axios.post<AxiosResponseLogin>('/api/login_process.php', formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true
    });
    const checkData = response.data;
    return checkData.success
  } catch (err) {
    console.error(err);
  }
}