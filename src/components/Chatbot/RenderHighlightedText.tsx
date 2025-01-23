import {MessageHighlight, MessageStrikeThrough} from "../../@types/domain.ts";
import {FunctionComponent, ReactNode} from "react";

interface Props {
  text: string;
  textFormats: MessageHighlight[] | MessageStrikeThrough[];
}

export const RenderHighlightedText: FunctionComponent<Props> = ({text, textFormats}) => {
  let lastIndex = 0; // 마지막으로 처리된 텍스트 위치
  const elements: ReactNode[] = [];
  const sortedTextFormats = textFormats
    .flatMap(textFormat => {
      if('highlights' in textFormat){
        return textFormat.highlights
      } else {
        return textFormat.strikeThrough
      }
    })
    .sort((a, b) => a.start - b.start) // 하이라이트를 시작 위치 순으로 정렬
  
  sortedTextFormats.forEach((highlights, idx) => {
    const {start, end} = highlights
    
    console.log('start:', start, 'end: ', end)
    // 일반 텍스트 추가
    if (lastIndex < start) {
      elements.push(
        <span key={`normal-${idx}`}>
          {text.slice(lastIndex, start)}
        </span>
      );
    }
    
    // 하이라이트된 텍스트 추가
    elements.push(
      <span key={`highlight-${idx}`} className="bg-amber-200">
        {text.slice(start, end)}
      </span>
    );
    
    lastIndex = end; // 마지막 처리된 위치 업데이트
  });
  
  
  // 남은 일반 텍스트 추가
  if (lastIndex < text.length) {
    elements.push(
      <span key="remaining">
        {text.slice(lastIndex)}
      </span>
    );
  }
  
  return <>{elements}</>;
};