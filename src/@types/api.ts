export interface AxiosResponseByProject {
  success: {
    code: string;
    data: {
      idx: string;
      pt_hash: string;
      pt_main_img: string;
      pt_name_en: string;
      pt_name_ko: string;
      pt_story_type: string;
      pt_story_type_nm: string;
      pt_story_txt: string;
      pt_w_date: string;
    };
    total_count: string
  }
}

export interface  AxiosResponseByPortfolio {
  success: {
    code: string;
    data: {
      idx: string;
      pt_idx: string;
      pt_hash: string;
      pt_main_img: string;
      pt_name_ko: string;
      pt_name_en: string;
      pt_story_type: string;
      pt_w_date: string;
    };
    total_count: string;
  }
}

export interface  AxiosResponseLogin {
  success: {
    code: string;
  }
}