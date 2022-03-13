import { SuggestionItem } from "../api/fetch-suggestion-list";

const sessionStorage = window.sessionStorage;

export function getItem(key: string) {
  const value = sessionStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

export function setItem(key: string, value: SuggestionItem[]) {
  return sessionStorage.setItem(key, JSON.stringify(value));
}

export function hasItem(key: string) {
  return getItem(key) !== null;
}
