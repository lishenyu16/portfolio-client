import './index.css';
import React from 'react';
import { useSelector } from 'react-redux';

function timeStatus() {
  let h = new Date().getHours();
  if (h >= 5 && h < 12) {
    return 'morning';
  } else if (h >= 12 && h < 17) {
    return 'afternoon';
  } else {
    return 'evening';
  }
}

export default () => {
  const { userInfo } = useSelector(state => state.user);

  return (
    <React.Fragment>
      <div style={{ padding: '5% 10%' }}>
        {userInfo ?
          <p>Good {timeStatus()} <i>{userInfo && userInfo.username}</i> & welcome to my blogs !</p> :
          <p>Good {timeStatus()} & welcome to my blogs !</p>
        }
        <p>Glad you came by. I wanted to welcome you and let you know I appreciate you spending time here at the blog very much.
          Everyone is so busy and life moves pretty fast, so I really do appreciate you taking time out of your busy day to check out
          my blog. Thanks.</p>
        <p> Another thing I will always appreciate is your feedback to the blog. If you have any comments or suggestions I welcome them
          and would love to hear them.  Always. Not that all criticism is a fun thing but I think honest criticism given in an honest
          positive manner is something we can all learn and grow from if we are open to hearing it.  I will always listen to your ideas.
          So I do welcome your suggestions for the blog...</p>
        <p>Always.</p>
        <p>I will always do my best to bring you content that will interest, inspire, motivate and maybe even have you walking away
          thinking about and seeing things in a different way than before you came.  I want to blog about more than just computer science
          and…  Life is so much more than that and I want to touch on everything because I think our lives are more than just sitting in front of screens.</p>
        <p>This blog will always be changing because I am. You are. The world is. So don’t get too comfortable. I like to surprise
          from time to time, I just might throw you a curve ball every now and then. 😉</p>
        <p>Thanks for letting me,</p>
        <p>Shenyu 🙂</p>
      </div>
    </React.Fragment>
  );
};
