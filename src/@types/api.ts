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

export interface AxiosResponseByPortfolio {
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

export interface AxiosResponseLogin {
  success: {
    code: string;
  }
}

export interface AxiosResponseAixLab {
  success: {
    code: string;
    data: {
      list1: ListProject[] | [];
      list2: ListProject[] | [];
      list3: ListPortfolio[] | [];
      list4: ListPortfolio[] | [];
    };
  };
}

export interface AxiosResponseAixLabTransformed {
  list1: ListProject[] | [];
  list2: ListProject[] | [];
  list3: ListPortfolio[] | [];
  list4: ListPortfolio[] | [];
}

export interface ListProject {
  idx: string;
  pt_code: string;
  pt_name_ko: string;
  pt_name_en: string;
  pt_main_img: string;
  pt_story_type: string;
  pt_w_date: string;
  pt_hash: string;
  pt_story_type_nm: string;
  img_url: string;
}

export interface ListPortfolio {
  idx: string;
  pt_idx: string;
  pt_code: string;
  pt_name_ko: string;
  pt_name_en: string;
  cp_type: string | null;
  mt_name_ko: string | null;
  cp_main_title: string | null;
  cp_main_img: string | null;
  cp_like_count: string | null;
  cp_show_count: string | null;
  cp_w_date: string | null;
  img_url: string;
}


