import axios from "axios";
import {AxiosResponseByProject} from "../@types/api.ts";

export const getProjectList = async(pt_name_ko:string = '', page: number = 1) => {
  try {
    const response = await axios.get<AxiosResponseByProject>(`/api/project_list.php`, {
      params: {
        pt_name_ko: pt_name_ko,
        page: page
      }
    })
    
    if(!response.data || ! response.data.success) {
      console.warn("Invailid API response", response.data);
      return {totalCount: 0, formatedData: []}
    }
    
    const checkData = response.data.success.data || []
    const totalCount = Number(response.data.success.total_count) || 0
    console.log('검색어 : ', pt_name_ko, '현재페이지 : ', page, '데이터 : ',response.data)
    if(Array.isArray(checkData) && checkData.length > 0) {
      const formatedData = checkData.map(data => {
        return {
          idx: data.idx || '',
          titleKo: data.pt_name_ko || '',
          titleEn: data.pt_name_en || '',
          subTitle: '',
          imgUrl: data.pt_main_img || '',
          hash: data.pt_hash?.split(',').map((hash: string) => `#${hash}`) || [],
          type: data.pt_story_type_nm || '',
          story: data.pt_story_txt || '',
          isSurvey: false,
          surveyUrl: '',
          timeStamp: data.pt_w_date || '',
        }
      })
      return {totalCount, formatedData}
    }
  } catch(err) {
    console.log('Error fetching project List', err)
    return {totalCount: 0, formatedData: []}
  }
}