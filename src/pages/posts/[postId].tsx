import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Post from "../../components/Post";
import Layout from "../../components/Layout";
import { RootStateType } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../store/actions";

const PostId = () => {
  const post = useSelector((state: RootStateType) => state.post);
  const dispatch = useDispatch();
  const router = useRouter();

  const id = router.query.postId;

  useEffect(() => {
    if (id) {
      dispatch(fetchPost(id));
    }
  }, [id]);

  if (post) {
    return (
      <Layout>
        <Post post={post} />
      </Layout>
    );
  }

  return (
    <Layout>
      <div>Loading ...</div>
    </Layout>
  );
};

export default PostId;
