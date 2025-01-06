export type Project = {
  idx: number;
  title: string;
  subTitle: string;
  imgUrl: string;
  tag: '카드뉴스' | '기본';
}
export type PageReducerType = {
  type: string;
  maxPage?: number;
  itemsPerPage?: number;
  page?: number
}