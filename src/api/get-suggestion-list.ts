const API_END_POINT =
  "https://5qfov74y3c.execute-api.ap-northeast-2.amazonaws.com/web-front";

export const getSuggestionList = async (
  URL: string
): Promise<SuggestionItem[]> => {
  try {
    const res = await fetch(`${API_END_POINT}${URL}`);

    if (!res.ok) {
      throw new Error("Fail to call api");
    }

    return res.json();
  } catch {
    return [];
  }
};

export interface SuggestionListProps {
  suggestionItems: SuggestionItem[];
}

export interface SuggestionItem {
  text: string;
  id: number;
}
