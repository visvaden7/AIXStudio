export type Nullable<T> = T | null;

export type ProjectType = '' | '문제해결 체험' | '상상 더하기 체험' | '웹툰 생성 체험' | 'AI 간편 체험' | '카드뉴스'

export type Project = { //TODO: 타입정리 및 정리
  idx: number;
  titleKo: string;
  titleEn: string;
  subTitle: string;
  imgUrl: string;
  hash: string[];
  type?: ProjectType;
  story:string;
  isSurvey: boolean;
  surveyUrl: string;
  timeStamp: string;
}

export type Portfolio = {
  idx: number,
  imgUrl: string,
  projectTitle: string,
  title: string,
  type: ProjectType,
  user: string,
  timeStamp: string,
  heartRate: number,
  showRate: number,
}

export type PageReducerType = {
  type: string;
  maxPage?: number;
  page?: number
}

export type Options = {
  id: number;
  value: 'latest' | 'popular';
  label: string;
}
export type Keywords = {
  idx?: number;
  name: string;
  showStory: boolean;
}

export interface TextFormat {
  id: string;
  text: string;
  start: number;
  end: number;
  type: "highlight" | "strikeThrough";
}

export interface MessageFormat {
  id: string;
  formats: TextFormat[];
}

export interface ChatMessage {
  role: string;
  content: string;
}

export type ValidText = {
  id: number;
  role: string;
  content: string
}

export interface CopyType {
  title: string[];
  content: string[];
  color: string;
}

export interface IntroductionText {
  title: string;
  content: string;
  videoUrl: string;
}

export interface FormData {
  name: string;
  school: string;
  phone: string;
  email: string;
  agree: false;
}