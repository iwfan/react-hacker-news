

export const BASE_URL = "https://hn.algolia.com/api/v1";
export const PATH_SEARCH = "/search";
export const PARAM_SEARCH = "?query=";


export const fetchHackerNewsData = async () => {
  try {
    const response = await fetch(`http://hn.algolia.com/api/v1/search?tags=front_page`);
    if (!response.ok) { throw new Error("fetch failed") }
    const result = await response.json();
    return result;
  } catch (e) {
    throw e;
  }
}
