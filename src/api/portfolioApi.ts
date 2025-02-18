import axios from "axios";
import {AxiosResponseByPortfolio} from "../@types/api.ts";
export const getPortfolioList = async (pt_name_ko:string, page:number, projectType:number, sort:'popular' | 'latest') => {
  try {
    const response = await axios.get<AxiosResponseByPortfolio>(`/api/portfolio_list.php`,
      {
        params: {
          pt_name_ko: pt_name_ko,
          page: page,
          cp_type: projectType,
          sort: sort
        }
      }
      );
    const checkData = response.data.success.data
    const totalCount = response.data.success.total_count;
    if(Array.isArray(checkData)){
      const formatedData = checkData.map(portfolio => {
        return {
          idx: portfolio.idx || '',
          imgUrl: portfolio.cp_main_img || '',
          projectTitle: portfolio.pt_name_ko || '',
          title: portfolio.cp_main_title || '',
          type: portfolio.cp_type === 0
            ? ''
            : portfolio.cp_type === 1
              ? '문제해결 체험'
              : portfolio.cp_type === 2
                ? '상상 더하기 체험'
                : portfolio.cp_type === 3
                  ? '웹툰 생성 체험'
                  : 'AI 간편 체험',
          user: portfolio.mt_name,
          timeStamp: portfolio.cp_w_date.slice(0,10),
          heartRate: parseInt(portfolio.cp_like_count)
        }
      });
      return {formatedData, totalCount};
    }
    // return checkData.map(portfolio => {
    
    // })
    
  } catch (err) {
    console.error(err);
  }
}