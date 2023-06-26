import React from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Menu,
  MenuItem,
  Container
} from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import QuizIcon from '@mui/icons-material/Quiz';
import HomeIcon from '@mui/icons-material/Home';
// import Simulation from './Simulation';
// import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Link } from 'react-router-dom'
// import { useState } from 'react'
export const MuiNavbar = () => {
  // const [anchorEl, setAnchorEl] = useState < null | HTMLElement > (null)
  // const open = Boolean(anchorEl)
  // const handleClick = (event: React.MouseEvent <HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget)
  // }
  // const handleClose = () => {
  //   setAnchorEl(null) 
  // }
  return (
    <AppBar sx={{ position: 'static', margin: '0' }} >
      <Container maxWidth='xl' sx={{ backgroundColor: 'white', color: 'black' }} >
        <Toolbar>
          <IconButton size='large' edge='start' color='black' aria-label='logo'>
            <CatchingPokemonIcon />
          </IconButton>
          <Typography   variant='h6' component='div' sx={{ flexGrow: 1}}>
            Probability
          </Typography>
          <Stack  direction='row' sx={{ marginLeft: '20px'}} spacing={2}>
            {/* <Button color='inherit'>Theory</Button>
          <Button color='inherit'>Simulation</Button>
          <Button color='inherit'>Quiz</Button> */}
            {/* <Link to="/">Theory</Link>
          <Link to="/simulation1">Simulation</Link>
          <Link to="/test">Test</Link> */}
            <Link className='fav ' to="/"><HomeIcon />Home</Link>
            <Link className='fav' to="/theory"><LibraryBooksIcon />Theory</Link>
            <Link className='fav ' to="/simulation1"><AutoAwesomeMotionIcon />Simulation</Link>
            <Link className='fav ' to="/test"><QuizIcon />Test</Link>
            {/* <Button
            color='inherit'
            id='resources-button'
            // aria-controls={open ? 'resources-menu' : undefined}
            aria-haspopup='true'
            // aria-expanded={open ? 'true' : undefined}
            endIcon={<KeyboardArrowDownIcon />}
            // onClick={handleClick}
            >
            Resources
          </Button>
          <Button color='inherit'>Login</Button> */}
          </Stack>
          <Menu
            id='resources-menu'
            // anchorEl={anchorEl}
            // open={open}
            // onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            MenuListProps={{
              'aria-labelledby': 'resources-button'
            }}>
            {/* <MenuItem onClick={handleClose}>Blog</MenuItem> */}
            <MenuItem >Blog</MenuItem>
            {/* <MenuItem onClick={handleClose}>Podcast</MenuItem> */}
            <MenuItem >Podcast</MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default MuiNavbar