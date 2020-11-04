import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Layout from "../../../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import { RootStateType } from "../../../types";
import { fetchPost, updatePost } from "../../../store/actions";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1.3em;
  margin-bottom: 10px;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 25px;
  padding: 0 5px;
  font-size: 1.2em;
  margin-bottom: 10px;
`;

const Textarea = styled.textarea`
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 100px;
  padding: 0 5px;
  font-size: 1.2em;
  margin-bottom: 10px;
  resize: none;
`;

const InputSubmit = styled.input`
  width: 150px;
  height: 40px;
  background-color: #33cc66;
  margin: auto;
  border: none;
  border-radius: 5px;
  font-size: 1.5em;
  cursor: pointer;
`;
const ButtonBack = styled.button`
  width: 150px;
  height: 40px;
  background-color: #999966;
  margin: auto;
  border: none;
  border-radius: 5px;
  font-size: 1.5em;
  cursor: pointer;
`;

const Edit = () => {
  const post = useSelector((state: RootStateType) => state.post);
  const dispatch = useDispatch();
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const router = useRouter();
  const id = router.query.postId;

  useEffect(() => {
    if (id) {
      dispatch(fetchPost(id));
    }
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await dispatch(updatePost(id, title, body));
      setTitle("");
      setBody("");
      router.back();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <Form onSubmit={handleUpdate}>
        <Label>Title</Label>
        <Input
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Label>Text</Label>
        <Textarea
          name="body"
          placeholder="Text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <ButtonBack onClick={() => router.back()}>Go back</ButtonBack>
          <InputSubmit type="submit" value="Submit" />
        </div>
      </Form>
    </Layout>
  );
};

export default Edit;
