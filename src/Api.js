export const BASE_URL = "https://hn.algolia.com/api/v1";
export const PATH_SEARCH = "search";
export const PARAM_SEARCH = "query=";
export const TAG_SEARCH = "tags=";
export const PAGE_SEARCH = "page=";

export const fetchHackerNewsData = async (searchText = "", pageNo = 0) => {
  try {
    const response = await fetch(`${ BASE_URL }/${ PATH_SEARCH }?${ PARAM_SEARCH }${ searchText }&${ PAGE_SEARCH }${ pageNo }`);
    if (!response.ok) {
      throw new Error("fetch failed")
    }
    const result = await response.json();
    return result;
  } catch (e) {
    throw e;
  }
}
