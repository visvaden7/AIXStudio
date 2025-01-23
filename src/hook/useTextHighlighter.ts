import {useRef, useState} from "react";
import {TextFormat, MessageHighlight} from "../@types/domain.ts";
import {calculateAbsoluteRange} from "../utils/caculateAbsoluteRange.ts";

export const useTextHighlighter = () => {
  const containerRef = useRef<Map<string, HTMLDivElement>>(new Map())
  const [highlightedTexts, setHighlightedTexts] = useState<MessageHighlight[]>([]);
  
  const handleTextSelectHighlight = (messageId: string) => {
    const selection = window.getSelection();
    if (!selection || selection.toString().trim() === '') return;
    
    const selectedText = selection.toString();
    const range = selection.getRangeAt(0); // 선택 영역의 범위
    
    const container = containerRef.current.get(messageId); // 메시지 컨테이너 참조
    if (!container) return;
    
    const { absoluteStart, absoluteEnd } = calculateAbsoluteRange(container, range);
    
    // 기존 메시지의 하이라이트 가져오기
    const messageHighlights = highlightedTexts.find((msg) => msg.id === messageId);
    const existingHighlights = messageHighlights?.highlights || [];
    
    // 중복된 하이라이트 확인
    const overlappingHighlight = existingHighlights.find(
      (highlight) => highlight.start < absoluteEnd && highlight.end > absoluteStart
    );
    
    if (overlappingHighlight) {
      // console.log('overlappingHighlight', overlappingHighlight);
      adjustHighlight(messageId, overlappingHighlight, absoluteStart, absoluteEnd);
    } else {
      // console.log('No overlapping, adding new highlight');
      addHighlight(messageId, selectedText, absoluteStart, absoluteEnd);
    }
    
    selection.removeAllRanges(); // 선택 영역 초기화
  };

// 새로운 하이라이트 추가 함수
  const addHighlight = (messageId: string, text: string, start: number, end: number) => {
    setHighlightedTexts((prev) => {
      const existingMessage = prev.find((msg) => msg.id === messageId);
      
      if (existingMessage) {
        // 기존 메시지에 하이라이트 추가
        const updatedHighlights = [
          ...existingMessage.highlights,
          { id: Date.now().toString(), text, start, end },
        ];
        return prev.map((msg) =>
          msg.id === messageId ? { ...msg, highlights: updatedHighlights } : msg
        );
      } else {
        return [
          ...prev,
          {
            id: messageId,
            highlights: [{ id: Date.now().toString(), text, start, end }],
          },
        ];
      }
    });
  };

// 중복된 하이라이트 조정 함수
  const adjustHighlight = (
    messageId: string,
    existingHighlight: TextFormat,
    newStart: number,
    newEnd: number
  ) => {
    const { start, end, text } = existingHighlight;
    
    // 하이라이트 분리 (왼쪽, 오른쪽)
    const leftText = text.slice(0, newStart - start);
    const rightText = text.slice(newEnd - start);
    
    setHighlightedTexts((prev) =>
      prev.map((msg) =>
        msg.id === messageId
          ? {
            ...msg,
            highlights: [
              ...msg.highlights.filter((highlight) => highlight.id !== existingHighlight.id),
              ...(leftText
                ? [{ id: Date.now().toString(), text: leftText, start, end: newStart }]
                : []),
              ...(rightText
                ? [{ id: Date.now().toString(), text: rightText, start: newEnd, end }]
                : []),
            ],
          }
          : msg
      )
    );
  };
  
  const registerHighlightContainerRef = (messageId: string, ref: HTMLDivElement): void => {
    containerRef.current.set(messageId, ref)
  }
  
  return {
    highlightedTexts,
    handleTextSelectHighlight,
    registerHighlightContainerRef,
  };
};
