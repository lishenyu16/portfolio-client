import React, { useState, useRef, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { isMobileOrPc } from '../utils/utils';
import Nav from './Nav';
import Sider from './Sider';
import Canva from './canva';
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './style.css';
import './mobile.css';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default (props) => {
  const ref = useRef();
  const [pos, setPos] = useState(false);
  const handleTop = () => {
    ref.current.scrollTop = 0;
    setPos(false);
  };
  const handleScroll = () => {
    if (ref.current.scrollTop > 200) {
      if (!pos) setPos(true);
    } else {
      if (pos) setPos(false);
    }
  };
  useEffect(() => {
    ref.current.addEventListener("scroll", handleScroll);
    return () => ref.current.removeEventListener("scroll", handleScroll);
  });

  let isShowSlider = false;
  if (!isMobileOrPc) {
    isShowSlider = true;
  }

  return (
    <div className='layouts' ref={ref} style={{ overflowY: "scroll", scrollBehavior: "smooth" }}>
      <Canva />
      <Nav />
      <div className='layout'>
        <ToastContainer />
        <Outlet />
        {isShowSlider && <Sider />}
        <Button
          variant='text'
          onClick={handleTop}
          sx={{
            position: "fixed",
            bottom: 60,
            right: 25,
            display: pos ? "block" : "none",
            fontSize: '20px',
          }}
        >
          <ArrowUpwardIcon />
        </Button>
      </div>
      <div id='footer'>
        Full Stack Marathon ©{new Date().getFullYear()} Created by Shenyu
        {/* <Typography variant="body2" color="text.secondary" align="center" {...props}>
          {'Copyright © '}
          <Link color="inherit" href="shenyu16.com">
            shenyu16.com
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography> */}
      </div>
    </div>
  )
}