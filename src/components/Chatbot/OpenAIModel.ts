import {ChatOpenAI} from "@langchain/openai";
import {OPENAI_API_KEY} from "../../const/OPENAI_API_KEY.ts";

export const model = new ChatOpenAI({
  apiKey: OPENAI_API_KEY,
  temperature: 0.7
})