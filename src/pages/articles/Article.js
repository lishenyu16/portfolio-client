import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleArticleThunk } from '../../redux/reducers/articleSlice';
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { setCurrentArticle } from '../../redux/reducers/articleSlice';

export default () => {
  const { articleId } = useParams();
  const dispatch = useDispatch();
  const { currentArticle } = useSelector(state => state.article);

  useEffect(() => {
    (() => {
      dispatch(getSingleArticleThunk(articleId));
    })();
    return () => {
      dispatch(setCurrentArticle(null));
    }
  }, []);

  if (currentArticle) {
    return (
      <article style={{ padding: '20px', background: '#eee' }}>
        <h1 style={{ fontSize: '30px' }}>{currentArticle.title}</h1>
        <div style={{ display: 'flex', columnGap: '20px', margin: '30px 0', color: 'gray' }}>
          <div>By {currentArticle.author}</div>
          <div>
            {new Date(currentArticle.created_on).toLocaleDateString()}
          </div>
        </div>
        <ReactMarkdown plugins={[gfm]} children={currentArticle.content} />
      </article>
    )
  };
  return null;

}