import React, { useState, useRef, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { isMobileOrPc } from '../utils/utils';
import Nav from './Nav';
import Sider from './Sider';
import Canva from './canva';
import Button from '@mui/material/Button';
import './style.css';
import './mobile.css';

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
    <div className='layouts' ref={ref} style={{overflowY: "scroll", scrollBehavior: "smooth"}}>
      <Canva />
      <Nav />
      <div className='layout'>
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
          Up
        </Button>
      </div>
      <div id='footer'>
        Full Stack Marathon ©2023 Created by Shenyu
      </div>
    </div>
  )
}