import {MessageFormat} from "../../@types/domain.ts";
import {FunctionComponent, ReactNode} from "react";

interface Props {
  text: string;
  messageId: string;
  textFormats: MessageFormat[]
}

export const RenderFormatText: FunctionComponent<Props> = ({text, textFormats, messageId}) => {
  let lastIndex = 0; // 마지막으로 처리된 텍스트 위치
  const elements: ReactNode[] = [];
  
  const messageTextFormats =
    textFormats.find((format) => format.id === messageId) || null;
  
  if (!messageTextFormats) {
    return <span>{text}</span>;
  }
  const sortedTextFormats = (messageTextFormats.formats
  ).sort((a, b) => a.start - b.start); // 포맷 데이터 정렬


  sortedTextFormats.forEach((highlights, idx) => {
    const {start, end} = highlights

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
      <span key={`highlight-${idx}`} className={`${highlights.type === 'highlight' ? 'bg-amber-200' : 'line-through'}`  }>
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