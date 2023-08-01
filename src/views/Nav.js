import React from 'react';
import { Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import BadgeIcon from '@mui/icons-material/Badge';
import { NavLink } from 'react-router-dom';

export default () => {
  const linkActive = ({isActive}) => {
    return {
      fontWeight: 'bold',
      color: isActive ? 'blue' : 'inherit',
      textDecoration: 'none',
      margin: '5px',
      display: 'flex',
      alignItems: 'center',
      width: '100px'
    }
  }

  return (
    <Box sx={{ maxWidth: { xs: 320, sm: 480, md: '100%' } }} className='nav'>
      <NavLink to='/' style={linkActive}><HomeIcon /> Home</NavLink>
      <NavLink to='/articles' style={linkActive}><ArticleIcon /> Articles</NavLink>
      <NavLink to='/about' style={linkActive}><BadgeIcon /> About</NavLink>
    </Box>
  );
}