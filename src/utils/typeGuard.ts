import {Portfolio, Project, ValidText} from "../@types/domain.ts";

const isOfType = <T>(value: unknown, keys: (keyof T)[]): value is T => {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  for (const key of keys) {
    if (!(key in value)) {
      return false;
    }
  }
  return true;
};

export const isProject = (value: unknown): value is Project => {
  const keys:(keyof Project)[] = [
    'idx', 'titleKo', 'titleEn', 'subTitle', 'imgUrl', 'hash', 'type', 'story', 'timeStamp',
  ];
  return isOfType<Project>(value, keys)
}

export const isPortfolio = (value: unknown): value is Portfolio => {
  const keys:(keyof Portfolio)[] = [
    'idx', "imgUrl", "projectTitle", "title", "type", 'user', "timeStamp", 'heartRate','showRate'
  ];
  return isOfType<Portfolio>(value, keys)
}

export const isValidText = (value: unknown): value is ValidText => {
  const keys:(keyof ValidText)[] = [
    'id', 'role', 'content', "isValid"
  ];
  return isOfType<ValidText>(value, keys)
}