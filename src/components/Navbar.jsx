import React from "react";
import {Divider, AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, useMediaQuery, Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logoImage from "../assets/eliselogobig2.png";

export default function Navbar() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ background: "transparent", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: isMobile ? 'space-between' : 'space-between', marginTop: '2vh'}}>
        <img
          src={logoImage}
          alt="Logo"
          style={{ width: isMobile ? 60 : 100, height: isMobile ? 60 : 100 }}
        />
        {isMobile ? (
          <IconButton
            size="large"
            aria-controls="menu"
            aria-haspopup="true"
            onClick={handleMenuClick}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <div style={{ display: 'flex', gap: '16px' }}>
            <Typography
              color="inherit"
              href="#about"
              sx={{ textDecoration: 'none', padding: '8px', fontSize: '2rem', fontFamily: 'Bricolage Grotesque', cursor: 'pointer', '&:hover': { color: 'red' } }}
            >
              About me
            </Typography>
            <Typography
              color="inherit"
              href="#contact"
              sx={{ textDecoration: 'none', padding: '8px', fontSize: '2rem', fontFamily: 'Bricolage Grotesque', cursor: 'pointer', '&:hover': { color: 'blue' } }}
            >
              Contact
            </Typography>
            <Typography
              color="inherit"
              component={Link}
              href="https://github.com/elise-halmingh"
              sx={{ textDecoration: 'none', padding: '8px', fontSize: '2rem', fontFamily: 'Bricolage Grotesque', cursor: 'pointer', '&:hover': { color: 'yellow' } }}
            >
              Projects
            </Typography>
          </div>
        )}
        <Menu
          id="menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>About Me</MenuItem>
          <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
          <MenuItem onClick={handleMenuClose}>Projects</MenuItem>
        </Menu>
      </Toolbar>
      <Divider sx={{ backgroundColor:'white', marginTop: '1vh', opacity: 0.5}}/> 
    </AppBar>
  );
}
