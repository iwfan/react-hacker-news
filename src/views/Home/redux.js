import { fetchHackerNewsData } from "../../Api";

export const Types = {
  [`FETCH_START`]: 'HACKER/FETCH_DATA_START',
  [`FETCH_SUCCESS`]: 'HACKER/FETCH_DATA_SUCCESS',
  [`FETCH_FAIL`]: 'HACKER/FETCH_DATA_FAIL',
}

export const actions = {
  fetchStart() {
    return {
      type: Types.FETCH_START
    }
  },
  fetchData(searchKeyWord, pageNo = 0) {
    return async (dispatch, getState) => {
      dispatch(actions.fetchStart())
      try {
        const data = await fetchHackerNewsData(searchKeyWord, pageNo);
        dispatch(actions.fetchSuccess(data, pageNo))
      } catch (error) {
        dispatch(actions.fetchFail(error))
      }
    }
  },
  fetchSuccess(data, pageNo) {
    console.log(data)
    return {
      type: Types.FETCH_SUCCESS,
      payload: { data, pageNo }
    }
  },
  fetchFail(error) {
    return {
      type: Types.FETCH_FAIL,
      payload: error,
      error: true,
    }
  }
}

const initialState = {
  articles: [],
  loading: false,
  error: null,
  searchText: ""
}

export const reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_START:
      return { ...prevState, loading: true };
    case Types.FETCH_SUCCESS:
      return {
        ...prevState,
        loading: false,
        articles: action.payload.pageNo === 0 ? action.payload.data.hits : [...prevState.articles, ...action.payload.data.hits]
      };
    case Types.FETCH_FAIL:
      return { ...prevState, error: action.payload, loading: false };
    default:
      return prevState;
  }
}
