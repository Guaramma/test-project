import React from "react";
import Link, { LinkProps } from "next/link";
import styled, { css } from "styled-components";
import { useRouter } from "next/router";
import axios from "axios";
import { PostContainerProps, PostPrps, PostType, StyleProps } from "../types";

const PostContainer = styled.div`
  margin: 20px auto;
  border-bottom: 1px solid #ccc;
  padding: 20px;
  min-height: 40px;
  ${(props: PostContainerProps) =>
    props.singlePost &&
    css`
      margin: 0;
      padding: 0;
      border: none;
      border-radius: 10px;
      position: relative;
    `};
`;

const Title = styled.div`
  font-size: 2em;
  max-width: 80%;
  ${(props: LinkProps) =>
    props.link &&
    css`
      cursor: pointer;
      text-decoration: underline;
    `}
`;

const Body = styled.div`
  font-size: 1.3em;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  border: none;
  margin-left: 10px;
  font-size: 0.8em;
  padding: 10px;
  border-radius: 10px;
  color: white;
  width: 5em;
  cursor: pointer;

  ${(props: StyleProps) =>
    (props.delete &&
      css`
        background-color: #cc0000;
      `) ||
    (props.edit &&
      css`
        background-color: #33cc66;
      `)}
`;

const Post = ({ post, singlePost = true }: PostPrps) => {
  const router = useRouter();
  if (!post) {
    return null;
  }

  if (!singlePost && post.body && post.body.length > 100) {
    post.body = post.body.slice(0, 100) + "...";
  }

  const deletePost = async () => {
    try {
      await axios({
        method: "DELETE",
        url: `https://simple-blog-api.crew.red/posts/${post.id}`,
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PostContainer singlePost={singlePost}>
      {singlePost ? (
        <Title>{post.title}</Title>
      ) : (
        <Link href={`/posts/${post.id}`}>
          <Title link>{post.title}</Title>
        </Link>
      )}
      <Body>{post.body}</Body>
      {singlePost && (
        <ButtonContainer>
          <Link href={router.asPath + "/edit"}>
            <Button edit>Edit</Button>
          </Link>
          <Button delete onClick={deletePost}>
            Delete
          </Button>
        </ButtonContainer>
      )}
    </PostContainer>
  );
};
export default Post;
