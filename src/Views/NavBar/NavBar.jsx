// import { Link } from "react-router-dom";

// import SearchBar from "../../Components/SearchBar/SearchBar"

// const NavBar = () =>{

//     const handlerHome = () =>{
//         <Link to="/catalogue" />
//     }

//     return(
//         <div>
//             <Link to="/catalogue">Home</Link>
//             <SearchBar />
//         </div>
        
        
        
//     )
// }

// export default NavBar;
// src/components/NavBar.jsx

// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuIcon from '@mui/icons-material/Menu';
// import AdbIcon from '@mui/icons-material/Adb';
// import { Link } from 'react-router-dom';

// const pages = ['Service', 'About', 'Contact',""];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// const NavBar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//           <Typography variant="h6"noWrap component="a" href="/" sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             Sellas Aesthetic
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">
//                     <Link to={`/${page.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//                       {page}
//                     </Link>
//                   </Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 <Link to={`/${page.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//                   {page}
//                 </Link>
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
//                 <i class='bx bx-user'></i>
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default NavBar;
import {Link } from "react-router-dom"
import styles from "./NavBar.module.css"
import { useState } from "react"

const NavBar = () =>{
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);

  const toggleMenu = ()=>{
    setIsMenuOpen(!isMenuOpen)
  }

  return(
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.menu} onClick={toggleMenu}>
          <i className="ri-menu-line"  ></i>
        </div>
        </div>
      <div  className={`${styles.link} ${isMenuOpen ? styles.open : ""}`} >
        <ul className={styles.grouplist}>
          <li className={styles.list}>
            <Link to="/" className={styles.lista}>Home</Link>
          </li>
          <li className={styles.list}>
            <Link to="/ofert" className={styles.lista}>Ofert</Link>
          </li>
          <li className={styles.list}>
            <Link to="/About" className={styles.lista}>About</Link>
          </li>
          <li className={styles.list}>
            <Link to="/service" className={styles.lista}>Service</Link>
          </li>
          <li className={styles.list}>
            <Link to="/contact"className={styles.lista}>Contact</Link>
          </li>
        </ul>
        <button className={styles.btn}>book now</button>
      </div>
      </div>

   
   
      
   
  )
}
 

export default NavBar;