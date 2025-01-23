import {useRef, useState} from "react";
import {TextFormat, MessageStrikeThrough} from "../@types/domain.ts";
import {calculateAbsoluteRange} from "../utils/caculateAbsoluteRange.ts";

export const useTextStrikeThrough = () => {
  const containerRef = useRef<Map<string, HTMLDivElement>>(new Map())
  const [strikeThrough, setStrikeThrough] = useState<MessageStrikeThrough[]>([]);
  
  const handleTextSelectStrikeThrough = (messageId: string) => {
    const selection = window.getSelection();
    if (!selection || selection.toString().trim() === '') return;
    
    const selectedText = selection.toString();
    const range = selection.getRangeAt(0); // 선택 영역의 범위
    
    const container = containerRef.current.get(messageId); // 메시지 컨테이너 참조
    if (!container) return;
    
    const { absoluteStart, absoluteEnd } = calculateAbsoluteRange(container, range);
    
    // 기존 메시지의 취소선 가져오기
    const messageStrikeThrough = strikeThrough.find((msg) => msg.id === messageId);
    const existingStrikeThrough = messageStrikeThrough?.strikeThrough || [];
    
    // 중복된 취소선 확인
    const overlappingStrikeThrough = existingStrikeThrough.find(
      (strikeThrough) => strikeThrough.start < absoluteEnd && strikeThrough.end > absoluteStart
    );
    
    if (overlappingStrikeThrough) {
      console.log('overlappingStrikeThrough', overlappingStrikeThrough);
      adjustStrikeThrough(messageId, overlappingStrikeThrough, absoluteStart, absoluteEnd);
    } else {
      console.log('No overlapping, adding new strikeThrough');
      addStrikeThrough(messageId, selectedText, absoluteStart, absoluteEnd);
    }
    
    selection.removeAllRanges(); // 선택 영역 초기화
  };

// 새로운 하이라이트 추가 함수
  const addStrikeThrough = (messageId: string, text: string, start: number, end: number) => {
    setStrikeThrough((prev) => {
      const existingMessage = prev.find((msg) => msg.id === messageId);
      
      if (existingMessage) {
        // 기존 메시지에 하이라이트 추가
        const updatedStrikeThrough = [
          ...existingMessage.strikeThrough,
          { id: Date.now().toString(), text, start, end },
        ];
        return prev.map((msg) =>
          msg.id === messageId ? { ...msg, strikeThrough: updatedStrikeThrough } : msg
        );
      } else {
        return [
          ...prev,
          {
            id: messageId,
            strikeThrough: [{ id: Date.now().toString(), text, start, end }],
          },
        ];
      }
    });
  };

// 중복된 하이라이트 조정 함수
  const adjustStrikeThrough = (
    messageId: string,
    existingStrikeThrough: TextFormat,
    newStart: number,
    newEnd: number
  ) => {
    const { start, end, text } = existingStrikeThrough;
    
    // 하이라이트 분리 (왼쪽, 오른쪽)
    const leftText = text.slice(0, newStart - start);
    const rightText = text.slice(newEnd - start);
    
    setStrikeThrough((prev) =>
      prev.map((msg) =>
        msg.id === messageId
          ? {
            ...msg,
            strikeThrough: [
              ...msg.strikeThrough.filter((strikeThrough) => strikeThrough.id !== existingStrikeThrough.id),
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
  
  const registerStrikeThroughContainerRef = (messageId: string, ref: HTMLDivElement): void => {
    containerRef.current.set(messageId, ref)
  }
  
  return {
    strikeThrough,
    handleTextSelectStrikeThrough,
    registerStrikeThroughContainerRef,
  };
};
