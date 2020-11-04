import React, { useState } from "react";
import axios from "axios";

const New = () => {
  const [title, setTitle] = useState("d");
  const [body, setBody] = useState("");

  const createPost = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: { title, body },
        url: `https://simple-blog-api.crew.red/posts/`,
      });
      setTitle("");
      setBody("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={createPost}>
      <label>Title</label>
      <input
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Body</label>
      <input
        name="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default New;
