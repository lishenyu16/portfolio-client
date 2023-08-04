import React from 'react';
import { Box } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
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
      <NavLink to='/' style={linkActive}><HomeOutlinedIcon style={{marginRight: '5px'}} /> Home</NavLink>
      <NavLink to='/articles' style={linkActive}><ArticleOutlinedIcon style={{marginRight: '5px'}} /> Articles</NavLink>
      <NavLink to='/timeline' style={linkActive}><TimelineOutlinedIcon style={{marginRight: '5px'}} /> Timeline</NavLink>
      <NavLink to='/about' style={linkActive}><BadgeOutlinedIcon style={{marginRight: '5px'}} /> About</NavLink>
    </Box>
  );
}