import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import BadgeIcon from '@mui/icons-material/Badge';
import { NavLink } from 'react-router-dom';

export default () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const linkActive = ({isActive}) => {
    return {
      fontWeight: 'bold',
      color: isActive ? 'blue' : 'inherit',
      textDecoration: 'none',
      margin: '5px',
    }
  }

  return (
    <Box sx={{ maxWidth: { xs: 320, sm: 480, md: '100%' } }} className='nav'>
      <NavLink to='/' style={linkActive}>Home</NavLink>
      <NavLink to='/articles' style={linkActive}>Articles</NavLink>
      <NavLink to='/about' style={linkActive}>About</NavLink>
      {/* <Tabs
        value={value}
        onChange={handleChange}
        centered
      >
        <Tab icon={<HomeIcon />} iconPosition="start" label="Home" href="/" />
        <Tab icon={<ArticleIcon />} iconPosition="start" label="Articles" href="/articles" />
        <Tab icon={<BadgeIcon />} iconPosition="start" label="About" href="/about" />
      </Tabs> */}
    </Box>
  );
}