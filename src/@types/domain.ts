export type Nullable<T> = T | null;

export type ProjectType = '' | '문제해결 체험' | '상상 더하기 체험' | '웹툰 생성 체험' | 'AI 간편 체험'

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
  title: string,
  subtitle: string,
  type: ProjectType,
  user: string,
  timeStamp: string,
  heartRate: number
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