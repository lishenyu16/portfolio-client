import { Button, TextField } from '@mui/material';
import React, { useRef, useMemo, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import './styles.css';
import { saveArticleThunk } from '../../redux/reducers/articleSlice';
import { useNavigate } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { toast } from 'react-toastify';

const sampleText = `
\`\`\`sh
# Code block
\`\`\`
`;

export default () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [keywords, setKeywords] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [content, setContent] = useState(sampleText);
  const handleSubmit = () => {
    if (title.length === 0) {
      return toast.error('Title can not be empty');
    } else if (title.length > 100) {
      return toast.error('Title is too long');
    }
    if (content.length > 10000) {
      return toast.error('Content length is too long');
    }
    dispatch(saveArticleThunk({ title, keywords, content, description, img_url: link }))
      .then(res => {
        if (res.payload && res.payload.success) {
          navigate('/article/' + res.payload.article_id);
        } else if (res.payload && res.payload.statusCode === 401) {
          setError(true);
        }
      });
  }

  return (
    <div id='createArticle' style={{ width: '100%', display: 'flex', flexDirection: 'column', rowGap: '15px', minHeight: '800px', paddingTop: '20px' }}>
      <TextField placeholder='Enter the title' inputProps={{ style: { padding: 7 } }} onChange={(e) => setTitle(e.target.value)} />
      <TextField placeholder='Key Words' inputProps={{ style: { padding: 7 } }} onChange={e => setKeywords(e.target.value)} />
      <TextField placeholder='Description' inputProps={{ style: { padding: 7 } }} onChange={e => setDescription(e.target.value)} />
      <TextField placeholder='Link of surface' inputProps={{ style: { padding: 7 } }} onChange={e => setLink(e.target.value)} />
      <Button onClick={debounce(handleSubmit, 1000)} sx={{ width: 'max-content' }}>Submit</Button>
      <textarea
        style={{ width: "100%" }}
        rows={25}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <ReactMarkdown plugins={[gfm]} children={content} />
    </div>
  )
};