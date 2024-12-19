import { ADD_POST, FETCH_POSTS } from "../postTypes";

const initialState = {
    posts: [],
    page: 1,
    limit: 20,
    total: 0,
  };
  
  const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_POSTS:
        return {
          ...state,
          posts: action.payload.posts,
          page: action.payload.page,
          limit: action.payload.limit,
          total: action.payload.total,
        };
      case ADD_POST:
        return {
          ...state,
          posts: [action.payload, ...state.posts]
        };
      default:
        return state;
    }
  };
  
  export default postReducer;
  
