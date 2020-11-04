import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export interface Posts {
  id: number;
  title: string;
  body: string;
}

export const usePost = (id = "", params = null) => {
  const [posts, setPosts] = useState<Posts[] | undefined>(undefined);
  const url = "https://simple-blog-api.crew.red/posts";

  useEffect(() => {
    const fetchPosts = async () => {
      const postsAPI = await axios({
        method: "GET",
        params,
        url: url + id,
      });
      setPosts(postsAPI.data);
    };

    fetchPosts();
  }, []);
  return { posts };
};
