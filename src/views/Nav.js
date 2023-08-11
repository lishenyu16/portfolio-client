import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import { NavLink, Link } from 'react-router-dom';
import { isMobileOrPc } from '../utils/utils';
import { Box, AppBar, Drawer, IconButton, Toolbar, Button, MenuItem, Menu } from '@mui/material';
import { useSelector } from 'react-redux';
import { logout } from '../redux/reducers/userSlice';
import { useDispatch } from 'react-redux';

const linkActive = ({ isActive }) => {
  return {
    fontWeight: 'bold',
    color: isActive ? 'blue' : isMobileOrPc() ? 'deepskyblue' : 'inherit',
    textDecoration: 'none',
    margin: '5px',
    display: 'flex',
    alignItems: 'center',
    width: '100px'
  }
}

export default (props) => {
  const { userInfo } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const drawerWidth = 180;

  const navItems = [
    <NavLink to='/' style={linkActive}><HomeOutlinedIcon style={{ marginRight: '5px' }} /> Home</NavLink>,
    <NavLink to='/articles' style={linkActive}><ArticleOutlinedIcon style={{ marginRight: '5px' }} /> Articles</NavLink>,
    <NavLink to='/timeline' style={linkActive}><TimelineOutlinedIcon style={{ marginRight: '5px' }} /> Timeline</NavLink>,
    <NavLink to='/about' style={linkActive}><BadgeOutlinedIcon style={{ marginRight: '5px' }} /> About</NavLink>,
  ]
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [userMenu, setUserMenu] = React.useState(null);
  const open = Boolean(userMenu);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickOnUserMenu = (e) => {
    setUserMenu(e.currentTarget);
  }
  const handleCloseUserMenu = () => {
    setUserMenu(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
      {navItems.map((item, i) => (
        <React.Fragment key={i}>{item}</React.Fragment>
      ))}
    </Box>
  );

  if (isMobileOrPc()) { //if device is mobile
    return (
      <Box sx={{ display: 'flex' }}>
        <AppBar
          component="nav"
          position='static'
          sx={{
            backgroundColor: 'transparent',
            height: '5%',
          }}
        >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            {userInfo ? (
              <div>
                <IconButton
                  size="large"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            ) :
              <Button color="inherit" sx={{ textTransform: 'none' }}>
                <Link to='/signIn'>Login</Link>
              </Button>}
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    )
  }

  return (
    <Box className='nav'>
      {navItems.map((item, index) => (
        <React.Fragment key={index}>{item}</React.Fragment>
      ))}
      <div style={{ position: 'absolute', right: '30px', top: '15px' }}>
        {userInfo ?
          <React.Fragment>
            <Button sx={{ textTransform: 'none', backgroundColor: 'lightgray', borderRadius: '17px' }} onClick={handleClickOnUserMenu}>
              {userInfo.username}
            </Button>
            <Menu
              anchorEl={userMenu}
              id="account-menu"
              open={open}
              onClose={handleCloseUserMenu}
              onClick={handleCloseUserMenu}
            // transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            // anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Avatar /> My account
              </MenuItem>
              <Divider />

              <MenuItem onClick={handleCloseUserMenu}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={() => dispatch(logout())}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>

          </React.Fragment> :
          <Button color="inherit" sx={{ textTransform: 'none' }}>
            <Link to='/signIn'>Login</Link>
          </Button>}
      </div>
    </Box>
  );
}