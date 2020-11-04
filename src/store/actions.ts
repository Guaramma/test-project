import axios from "axios";
import { PostType } from "../types";
export const FETCH_ALL_POSTS = "FETCH_ALL_POSTS";
export const FETCH_POST = "FETCH_POST";

const url = "https://simple-blog-api.crew.red/posts";

export const loadAllPosts = (posts: PostType[]) => {
  return { type: FETCH_ALL_POSTS, posts };
};

export const loadPost = (post: PostType) => {
  return { type: FETCH_POST, post };
};

export const fetchAllPosts = () => {
  return async (dispatch) => {
    const postsAPI = await axios({
      method: "GET",
      url: url,
    });
    const posts = postsAPI.data;
    dispatch(loadAllPosts(posts));
  };
};

export const fetchPost = (id) => {
  return async (dispatch) => {
    const postAPI = await axios({
      method: "GET",
      params: { _embed: "comments" },
      url: `https://simple-blog-api.crew.red/posts/${id}`,
    });
    const post = postAPI.data;
    dispatch(loadPost(post));
  };
};

export const updatePost = (id, title, body) => {
  return async (dispatch) => {
    await axios({
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      data: { title, body },
      url: `https://simple-blog-api.crew.red/posts/${id}`,
    });
  };
};

export const newPost = (title, body) => {
  return async (dispatch) => {
    await axios({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: { title, body },
      url: `https://simple-blog-api.crew.red/posts/`,
    });
    dispatch(fetchAllPosts());
  };
};
