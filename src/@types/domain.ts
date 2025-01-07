export type Project = {
  idx: number;
  title: string;
  subTitle: string;
  imgUrl: string;
  tag: '카드뉴스' | '기본';
}

export type Portfolio = {
  idx: number,
  imgUrl: string,
  title: string,
  subtitle: string,
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