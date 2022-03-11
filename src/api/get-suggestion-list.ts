const API_END_POINT =
  "https://5qfov74y3c.execute-api.ap-northeast-2.amazonaws.com/web-front";

export const getSuggestionList = async (URL: string) => {
  try {
    const res = await fetch(`${API_END_POINT}${URL}`);

    if (!res.ok) {
      throw new Error("Fail to call api");
    }

    return res.json();
  } catch (error) {
    console.error(error);
  }
};
