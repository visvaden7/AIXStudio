import {useRef, useState} from "react";
import {TextFormat, MessageFormat} from "../@types/domain.ts";
import {calculateAbsoluteRange} from "../utils/caculateAbsoluteRange.ts";

export const useTextFormatter = () => {
  const containerRef = useRef<Map<string, HTMLDivElement>>(new Map())
  const [formattedTexts, setFormattedTexts] = useState<MessageFormat[]>([]);
  
  const handleTextSelect = (messageId: string, formatType: 'highlight' | 'strikeThrough') => {
    const selection = window.getSelection();
    if (!selection || selection.toString().trim() === '') return;
    
    const selectedText = selection.toString();
    const range = selection.getRangeAt(0); // 선택 영역의 범위
    console.log('test', formatType)
    const container = containerRef.current.get(messageId); // 메시지 컨테이너 참조
    if (!container) return;
    
    const { absoluteStart, absoluteEnd } = calculateAbsoluteRange(container, range);
    
    // 기존 메시지의 취소선 가져오기
    const messageFormat = formattedTexts.find((msg) => msg.id === messageId);
    const existingFormats = messageFormat?.formats || [];
    
    // 중복된 취소선 확인
    const overlappingFormat = existingFormats.find(
      (format) => format.start < absoluteEnd && format.end > absoluteStart
    );
    
    if (overlappingFormat) {
      console.log(overlappingFormat)
      adjustFormat(messageId, overlappingFormat, absoluteStart, absoluteEnd, formatType);
    } else {
      addFormat(messageId, selectedText, absoluteStart, absoluteEnd, formatType);
    }
    
    selection.removeAllRanges(); // 선택 영역 초기화
  };
  
  const addFormat = (
    messageId: string,
    text: string,
    start: number,
    end: number,
    formatType: "highlight" | "strikeThrough"
  ) => {
    setFormattedTexts((prev) => {
      const existingMessage = prev.find((msg) => msg.id === messageId);
      if (existingMessage) {
        const updatedFormats = [
          ...existingMessage.formats,
          { id: Date.now().toString(), text, start, end, type: formatType },
        ];
        return prev.map((msg) =>
          msg.id === messageId ? { ...msg, formats: updatedFormats } : msg
        );
      } else {
        return [
          ...prev,
          {
            id: messageId,
            formats: [{ id: Date.now().toString(), text, start, end, type: formatType }],
          },
        ];
      }
    });
  };
  
  const adjustFormat = (
    messageId: string,
    existingFormat: TextFormat,
    newStart: number,
    newEnd: number,
    formatType: "highlight" | "strikeThrough"
  ) => {
    const { start, end, text, type } = existingFormat;
    
    if( type !== formatType) {
      return;
    }
    
    const leftText = text.slice(0, newStart - start);
    const rightText = text.slice(newEnd - start);
    
    setFormattedTexts((prev) =>
      prev.map((msg) =>
        msg.id === messageId
          ? {
            ...msg,
            formats: [
              ...msg.formats.filter((format) => format.id !== existingFormat.id),
              ...(leftText
                ? [{ id: Date.now().toString(), text: leftText, start, end: newStart, type: formatType }]
                : []),
              ...(rightText
                ? [{ id: Date.now().toString(), text: rightText, start: newEnd, end, type: formatType }]
                : []),
            ],
          }
          : msg
      )
    );
  };
  
  const registerFormatContainerRef = (messageId: string, ref: HTMLDivElement): void => {
    containerRef.current.set(messageId, ref)
  }
  
  return {
    handleTextSelect,
    registerFormatContainerRef,
    formattedTexts
  }
}

