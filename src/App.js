import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Index';
import Articles from './pages/articles/Articles';
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

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const userInfo = getInfoFromCookie();
    if (userInfo) {
      (async () => {
        dispatch(getUserInfoThunk(userInfo.token));
      })();
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path="/articles" element={<Articles />} />
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