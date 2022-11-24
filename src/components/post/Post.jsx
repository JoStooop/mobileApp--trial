import React from 'react';
import styled from "styled-components/native";


const Post = (props) => {
  const {
    title,
    createdAt,
    imageUrl,
  } = props;

  const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`

  const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px;
`;

  const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`

  const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`

  const PostDetails = styled.View`
    flex: 1;
  justify-content: center;
`

  return (
    <PostView>
      <PostImage source={{uri: imageUrl}}/>
      <PostDetails>
        <PostTitle>{title}</PostTitle>
        <PostDate>{createdAt}</PostDate>
      </PostDetails>
    </PostView>
  );
};

export default Post;
