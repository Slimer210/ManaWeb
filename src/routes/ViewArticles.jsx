import React from 'react';
import { useParams } from 'react-router-dom';

export default function ViewArticles() {
  const params = useParams();
  return (

    <h1 className="my-20 py-20">{params.articleID}</h1>
  );
}
