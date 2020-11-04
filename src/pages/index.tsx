import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../components/Layout";
import NewPost from "../components/NewPost";
import Post from "../components/Post";
import { fetchAllPosts } from "../store/actions";
import { RootStateType } from "../types";

const Index = () => {
  const posts = useSelector((state: RootStateType) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  let postToRender;
  if (posts) {
    postToRender = posts
      .reverse()
      .map((post) => <Post key={post.id} post={post} singlePost={false} />);
  }

  return (
    <Layout>
      <NewPost />
      {postToRender}
    </Layout>
  );
};

export default Index;
