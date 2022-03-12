import { SuggestionItem } from "../api/fetch-suggestion-list";

export function getItem(key: string) {
  const value = sessionStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

export function setItem(key: string, value: SuggestionItem[]) {
  return sessionStorage.setItem(key, JSON.stringify(value));
}
