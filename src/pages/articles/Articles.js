import React from 'react';
import userSlice, { getUsers, addUser } from '../../redux/reducers/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { saveVisitorInfo } from '../../api/Users';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
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
    <div>
      <h2>Articles page is under development...</h2>
    </div>
  );
}

export default App;