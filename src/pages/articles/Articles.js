import React from 'react';
import userSlice, { getUsers, addUser } from '../../redux/reducers/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [pw, setPw] = useState('');
  const [re_enter, setReEnter] = useState('');

  return (
    <div>
      <div>Here is a articles page.</div>
      <button style={{marginTop: '10px'}}
        onClick={() => dispatch(getUsers())}
      >
        Get all users
      </button>
      {/* <button className='button'
        onClick={() => dispatch(incrementAsync(input))}
      >
        Add a new user
      </button>
      <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '10px 0' }}>
        <input type='text' name='username' value={username} onChange={setUsername} placeholder='username' />
        <input type='email' name='email' value={email} onChange={setEmail} placeholder='email' />
        <input type='password' name='password' value={pw} onChange={setPw} placeholder='password' />
        <input type='password' name='re-enter' value={re_enter} onChange={setReEnter} placeholder='re-enter password' />
      </div> */}
      {users.map(user => {
        return (
          <div key={user.user_id}>
            <div>{user.username}</div>
            <div>{user.email}</div>
            <div>{user.created_on}</div>
            <div>{user.last_login}</div>
          </div>
        )
      })}
    </div>
  );
}

export default App;