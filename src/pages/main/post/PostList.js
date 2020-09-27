import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Text } from '../../../language/Text';
import queryString from 'query-string';

import { useQuery, gql } from '@apollo/client';

import Posts from './Posts';

const PostListGQL = gql`
  query { getPostList(from:0, size:100) }
`;

export default function PostList() {
  document.title = "Insigth"
  const insight = [
    { value: "전체", label: "전체" },
    { value: "랭킹", label: "랭킹" },
    { value: "이슈", label: "이슈" },
    { value: "트렌드", label: "트렌드" },
    { value: "마케팅", label: "마케팅" },
    { value: "인사이드", label: "인사이드" }
  ];

  const GQL = useQuery(PostListGQL)
  useEffect(() => {
    console.log("[PostList] Load")
  }, [])

  const query = queryString.parse(useLocation().search)
  console.log(query)
  return (
    <div>
      {`인사이트 > ${query.category}`}
      <div>
        {insight.map(category => (
          <Link key={category.value} to={`?category=${category.value}`} style={{ margin: "5px", color: category.value === query.category && "red" }}>
            <Text location="insight_menu" word={category.value} toUpperCase />
          </Link>
        ))}
      </div>
      <div>
        <h2>{query.category} 리스트 </h2>
        <Posts GQL={GQL} category={query.category} />
      </div>
    </div>
  )
}
