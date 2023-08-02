import React from 'react';
import './404.css';

export default () => {
  return (
    <section style={{
      padding: '40px 0',
      background: '#fff',
      fontFamily: '"Arvo", serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <div class="four_zero_four_bg">
        <h1 style={{margin: 0}}>404</h1>
      </div>
      <div class="contant_box_404">
        <h3 class="h2">Look like you're lost</h3>
        <p>the page you are looking for is not avaible!</p>
        <a href="/" class="link_404">Go to Home</a>
      </div>
    </section>
  )
}