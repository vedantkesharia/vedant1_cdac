import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Menu,
  MenuItem,
  Container,
} from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import QuizIcon from '@mui/icons-material/Quiz';
import HomeIcon from '@mui/icons-material/Home';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
// import '../index.css'; // Import the custom CSS file

export const MuiNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(true);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    // Check the screen size on component mount
    function handleResize() {
      setIsWideScreen(window.innerWidth >= 768); // You can adjust the breakpoint as needed
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Call it once to set the initial value

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Hide the menu icon when navigation links are displayed on larger screens
    if (isWideScreen && menuOpen) {
      setMenuOpen(false);
    }
  }, [isWideScreen, menuOpen]);

  return (
    <AppBar sx={{ position: 'static', margin: '0' }}>
      <Container maxWidth='xl' sx={{ backgroundColor: 'white', color: 'black' }}>
        <Toolbar>
          {/* <IconButton size='large' edge='start' color='black' aria-label='logo'>
            <CatchingPokemonIcon />
          </IconButton> */}
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Probability Using Dice Simulation
          </Typography>
          {isWideScreen && ( // Show the navigation links on larger screens
            <Stack
              direction='row'
              sx={{
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: '20px',
              }}
            >
              <Link className='fav' to='/' style={{ textDecoration: 'none' }}>
                <HomeIcon />Home
              </Link>
              <Link className='fav' to='/theory' style={{ textDecoration: 'none' }}>
                <LibraryBooksIcon />Theory
              </Link>
              <Link className='fav' to='/simulation1' style={{ textDecoration: 'none' }}>
                <AutoAwesomeMotionIcon />Simulation
              </Link>
              <Link className='fav' to='/test' style={{ textDecoration: 'none' }}>
                <QuizIcon />Test
              </Link>
            </Stack>
          )}
          {!isWideScreen && ( // Show the menu icon only on smaller screens
            <IconButton
              size='large'
              edge='end'
              color='inherit'
              aria-label='menu'
              className={`menu-icon ${menuOpen ? 'show' : ''}`}
              onClick={menuOpen ? handleMenuClose : handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Menu
            anchorEl={menuOpen}
            open={menuOpen}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            MenuListProps={{
              'aria-labelledby': 'mobile-menu-button',
            }}
          >
            <MenuItem component={Link} to='/' onClick={handleMenuClose}>
              <HomeIcon />
              Home
            </MenuItem>
            <MenuItem component={Link} to='/theory' onClick={handleMenuClose}>
              <LibraryBooksIcon />
              Theory
            </MenuItem>
            <MenuItem component={Link} to='/simulation1' onClick={handleMenuClose}>
              <AutoAwesomeMotionIcon />
              Simulation
            </MenuItem>
            <MenuItem component={Link} to='/test' onClick={handleMenuClose}>
              <QuizIcon />
              Test
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MuiNavbar;







// import React from 'react'
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Typography,
//   Stack,
//   Menu,
//   MenuItem,
//   Container
// } from '@mui/material'
// import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
// import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
// import QuizIcon from '@mui/icons-material/Quiz';
// import HomeIcon from '@mui/icons-material/Home';
// // import Simulation from './Simulation';
// // import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
// import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
// // import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
// import { Link } from 'react-router-dom'
// // import { useState } from 'react'
// export const MuiNavbar = () => {
//   // const [anchorEl, setAnchorEl] = useState < null | HTMLElement > (null)
//   // const open = Boolean(anchorEl)
//   // const handleClick = (event: React.MouseEvent <HTMLButtonElement>) => {
//   //   setAnchorEl(event.currentTarget)
//   // }
//   // const handleClose = () => {
//   //   setAnchorEl(null) 
//   // }
//   return (
//     <AppBar sx={{ position: 'static', margin: '0' }} >
//       <Container maxWidth='xl' sx={{ backgroundColor: 'white', color: 'black' }} >
//         <Toolbar>
//           <IconButton size='large' edge='start' color='black' aria-label='logo'>
//             <CatchingPokemonIcon />
//           </IconButton>
//           <Typography   variant='h6' component='div' sx={{ flexGrow: 1}}>
//             Probability
//           </Typography>
//           <Stack  direction='row' sx={{ marginLeft: '20px'}} spacing={2}>
//             {/* <Button color='inherit'>Theory</Button>
//           <Button color='inherit'>Simulation</Button>
//           <Button color='inherit'>Quiz</Button> */}
//             {/* <Link to="/">Theory</Link>
//           <Link to="/simulation1">Simulation</Link>
//           <Link to="/test">Test</Link> */}
//             <Link className='fav ' to="/" style={{ textDecoration: 'none' }}><HomeIcon />Home</Link>
//             <Link className='fav' to="/theory" style={{ textDecoration: 'none' }}><LibraryBooksIcon />Theory</Link>
//             <Link className='fav ' to="/simulation1" style={{ textDecoration: 'none' }}><AutoAwesomeMotionIcon />Simulation</Link>
//             <Link className='fav ' to="/test" style={{ textDecoration: 'none' }}><QuizIcon />Test</Link>
//             {/* <Button
//             color='inherit'
//             id='resources-button'
//             // aria-controls={open ? 'resources-menu' : undefined}
//             aria-haspopup='true'
//             // aria-expanded={open ? 'true' : undefined}
//             endIcon={<KeyboardArrowDownIcon />}
//             // onClick={handleClick}
//             >
//             Resources
//           </Button>
//           <Button color='inherit'>Login</Button> */}
//           </Stack>
//           <Menu
//             id='resources-menu'
//             // anchorEl={anchorEl}
//             // open={open}
//             // onClose={handleClose}
//             anchorOrigin={{
//               vertical: 'bottom',
//               horizontal: 'right'
//             }}
//             transformOrigin={{
//               vertical: 'top',
//               horizontal: 'right'
//             }}
//             MenuListProps={{
//               'aria-labelledby': 'resources-button'
//             }}>
//             {/* <MenuItem onClick={handleClose}>Blog</MenuItem> */}
//             <MenuItem >Blog</MenuItem>
//             {/* <MenuItem onClick={handleClose}>Podcast</MenuItem> */}
//             <MenuItem >Podcast</MenuItem>
//           </Menu>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   )
// }

// export default MuiNavbar