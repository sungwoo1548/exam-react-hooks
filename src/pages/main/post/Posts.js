import React from 'react';

const Posts = ({ GQL, category }) => {
  console.log(GQL.data)

  if (GQL.loading) return <p>Loading ... </p>
  if (GQL.error) return <p>Error ... </p>
  return (
    <div>
      {GQL.data.getPostList.map(post =>
        category === "전체"
          ? <p>{post.title}</p>
          : post.category === category && <p>{post.title}</p>
      )}
    </div>
  )
};

export default Posts;
