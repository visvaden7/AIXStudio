import {FunctionComponent, RefObject, useEffect, useRef, useState} from "react";

interface Props {
  containerRef: RefObject<HTMLDivElement>;
  sectionCount: number;
  viewportMultiplier: number;
}

export const useRelativeScrollIndex:FunctionComponent<Props> = ({containerRef, sectionCount, viewportMultiplier}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ticking = useRef(false);
  
  useEffect(() => {
    const updateIndexOnScroll = () => {
      if (!containerRef.current || ticking.current) return;
      
      ticking.current = true;
      
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const containerOffsetTop = containerRef.current!.offsetTop;
        const relativeScrollY = scrollY - containerOffsetTop; // 해당 컴포넌트의 상대적 스크롤 값 계산
        
        let newIndex = Math.floor(relativeScrollY / (window.innerHeight * viewportMultiplier));
        newIndex = Math.max(0, Math.min(newIndex, sectionCount - 1));
        
        if (newIndex !== currentIndex) {
          setCurrentIndex(newIndex);
        }
        ticking.current = false;
      });
    };
    
    window.addEventListener("scroll", updateIndexOnScroll);
    return () => {
      window.removeEventListener("scroll", updateIndexOnScroll);
    };
  }, [containerRef, currentIndex, sectionCount, viewportMultiplier]);
  
  return currentIndex;
}