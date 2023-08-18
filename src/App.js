import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Index';
import Articles from './pages/articles/Articles';
import Article from './pages/articles/Article';
import About from './pages/about/About';
import Timeline from './pages/timeline/timeline';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import ConfirmEmail from './pages/auth/ConfirmEmail';
import ForgotPassword from './pages/auth/ForgotPassword';
import NotFound from './pages/NotFound';
import Layouts from './views/layout';
import './app.global.css';
import { useDispatch } from 'react-redux';
import { getUserInfoThunk } from './redux/reducers/userSlice';
import { getInfoFromCookie } from './utils/utils';
import { saveVisitorInfo } from './api/Users';
import CreateArticle from './pages/articles/CreateArticle';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const userInfo = getInfoFromCookie();
    if (userInfo) {
      (async () => {
        dispatch(getUserInfoThunk(userInfo.token));
      })();
    }
    (async () => {
      try {
        const res = await fetch('https://api.ipify.org?format=json');
        const ipBody = await res.json();
        const res2 = await saveVisitorInfo(ipBody.ip);
        console.log(res2);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path="/articles" exact element={<Articles />} />
        <Route path="/article/:articleId" element={<Article />} />
        <Route path="/create-article" element={<CreateArticle />} />
        <Route path="/about" element={<About />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/confirm-email/:verificationCode/:userId" element={<ConfirmEmail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;