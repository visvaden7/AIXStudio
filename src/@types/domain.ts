export type ProjectType = '' | '문제해결 체험' | '상상 더하기 체험' | '웹툰 생성 체험' | 'AI 간편 체험'

export type Project = { //TODO: 타입정리 및 정리
  idx: number;
  title: string;
  subTitle: string;
  imgUrl: string;
  type?: ProjectType;
  timeStamp: string;
}

export type Portfolio = {
  idx: number,
  imgUrl: string,
  title: string,
  subtitle: string,
  type: ProjectType,
  user: string,
  timestamp: string,
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