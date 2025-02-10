export const calculateAbsoluteRange = (container: HTMLElement, range: Range) => {
  let absoluteStart = 0;
  let absoluteEnd = 0;
  
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null);
  let currentNode = walker.nextNode();
  
  while (currentNode) {
    if (currentNode === range.startContainer) {
      absoluteStart += range.startOffset; // 현재 노드 내의 시작 오프셋 추가
      break;
    }
    absoluteStart += currentNode.textContent?.length || 0; // 텍스트 길이를 누적
    currentNode = walker.nextNode();
  }
  
  absoluteEnd = absoluteStart + range.toString().length;
  
  return { absoluteStart, absoluteEnd };
};
