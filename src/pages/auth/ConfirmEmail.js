import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { confirmEmailThunk } from '../../redux/reducers/userSlice';

export default () => {
  const { verificationCode, userId } = useParams();
  const dispatch = useDispatch();
  const { confirmedEmail, pendingConfirmEmail } = useSelector(state => state.user);

  useEffect(() => {
    (() => {
      dispatch(confirmEmailThunk({ verificationCode, userId }))
    })();
  }, []);

  return (
    <div>
      {pendingConfirmEmail ?
        <h3>Please wait while we are confirming ur email....</h3> :
        <h4>
          Great! Your email is confiemd, please use ur email/password to <Link to='/signIn'>login</Link> .
        </h4>}
    </div>
  )
}