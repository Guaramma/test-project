import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { newPost } from "../store/actions";

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
  font-family: inherit;
`;

const Textarea = styled.textarea`
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 100px;
  padding: 0 5px;
  font-size: 1.2em;
  margin-bottom: 10px;
  resize: none;
  font-family: inherit;
`;

const InputSubmit = styled.input`
  width: 150px;
  height: 40px;
  background-color: #999966;
  margin: auto;
  border: none;
  border-radius: 5px;
  font-size: 1.5em;
  cursor: pointer;
`;

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useDispatch();

  const createPost = async (e) => {
    e.preventDefault();
    try {
      dispatch(newPost(title, body));
      setTitle("");
      setBody("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Form onSubmit={createPost}>
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
        <InputSubmit type="submit" value="Submit" disabled={!title} />
      </Form>
    </div>
  );
};

export default NewPost;
