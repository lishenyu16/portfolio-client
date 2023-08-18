import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getArticlesThunk } from '../../redux/reducers/articleSlice';
import { useNavigate } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  const { articles } = useSelector(state => state.article);
  const navigate = useNavigate();

  useEffect(() => {
    (() => {
      dispatch(getArticlesThunk());
    })();
  }, []);

  const handleClickArticle = (id) => {
    navigate(`/article/${id}`);
  }

  return (
    <div style={{ width: '650px', maxWidth: '80%', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
      {articles.map((item, index) => {
        return (
          <div 
            key={index} 
            style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid lightgray', cursor: 'pointer' }}
            onClick={() => handleClickArticle(item.article_id)}
          >
            <div style={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div style={{ fontSize: '12px', color: 'rgb(178 174 174)' }}>{new Date(item.last_modified).toLocaleString()}</div>
            </div>
            <div style={{ width: '25%' }}>
              <img
                style={{width: '150px', height: '150px'}}
                src={item.img_url}
                // src={bg}
                alt="Article Surface"
              />
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default App;