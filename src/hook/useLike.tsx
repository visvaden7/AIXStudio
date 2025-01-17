import {useState} from "react";
import {Portfolio} from "../@types/domain.ts";

interface Props {
  initialLike: boolean
  portfolio: Portfolio;
}

interface UseLikeReturn {
  isLiked: boolean;
  toggleLike: () => void;
}

export const useLike = ({initialLike = false, portfolio}: Props): UseLikeReturn => {
  const [isLiked, setIsLiked] = useState<boolean>(initialLike)
  const toggleLike = () => {
    setIsLiked(prev => !prev)
    console.log(portfolio.idx, portfolio.user)
    // try {
    //   // 서버에 '좋아요' 상태 전송
    //   await axios.post(`/api/post s/${postId}/like`, { like: !isLiked, idx: idx });
    // } catch (error) {
    //   console.error('Failed to update like status', error);
    //   // 오류 발생 시 상태 롤백
    //   setIsLiked((prev) => !prev);
    // }
  }
  return {isLiked, toggleLike}
}