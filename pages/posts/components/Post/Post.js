import React from "react";
import Link from "next/link";
import styles from "./Post.module.scss";
import styled from "@emotion/styled";

const StyledH3 = styled.h3({
  fontSize: "20px",
  fontWeight: "bold",
  textAlign: "center",
  margin: 0,
});

const StyledP = styled.p({
  fontSize: "16px",
  textAlign: "center",
  margin: "10px 0",
});

const PostLink = styled.a`
  color: #333;
  &:hover {
    color: red;
  }
`;

export default function Post({ id, title, body }) {
  return (
    <div className={styles.postBox}>
      <StyledH3>
        <Link href="/posts/[id]" as={"/posts/" + id}>
          <PostLink>{title}</PostLink>
        </Link>
      </StyledH3>
      <StyledP>{body}</StyledP>
    </div>
  );
}
