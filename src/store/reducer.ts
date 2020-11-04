import { RootStateType } from "../types";
import { FETCH_ALL_POSTS, FETCH_POST } from "./actions";

const initialState: RootStateType = {
  posts: [],
  post: {},
};

const rootReducer = (state: RootStateType = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_POSTS:
      return {
        ...state,
        posts: action.posts,
        post: {},
      };
    case FETCH_POST:
      return {
        ...state,
        post: action.post,
      };
    default:
      return state;
  }
};

export default rootReducer;
