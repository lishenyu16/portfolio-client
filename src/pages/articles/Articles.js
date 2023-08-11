import React from 'react';
import userSlice, { getUsers, addUser } from '../../redux/reducers/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Articles page is under development...</h2>
    </div>
  );
}

export default App;