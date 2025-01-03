// 이메일 검증 함수
export const validateEmail = (email:string) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// 전화번호 검증 함수 (한국 형식)
export const validatePhoneNumber = (phoneNumber:string) => {
  // 한국 전화번호 형식: 010-XXXX-XXXX 또는 02-XXX-XXXX 등
  const phoneRegex = /^(\d{2,3})-(\d{3,4})-(\d{4})$/;
  return phoneRegex.test(phoneNumber);
}

// 한글 이름 검증 함수
export const validateKoreanName = (name: string) => {
  // 한글만 포함되었는지 확인
  const koreanNameRegex = /^[가-힣]+$/;
  return koreanNameRegex.test(name);
}

//비밀번호 검증 함수
export const validatePassword = (password: string) => {
  // 최소 8자, 대문자, 소문자, 숫자, 특수문자 각각 하나 이상 포함
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};