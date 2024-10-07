import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="sticky"
      sx={{
        zIndex: theme.zIndex.drawer + 1,
        background: scrollPosition > 0 ? 'rgba(255, 255, 255, 0.1)' : 'transparent', // Change based on scroll position
        backdropFilter: scrollPosition > 0 ? 'blur(10px)' : 'none', // Blur effect only when scrolled
        border: scrollPosition > 0 ? '1px solid rgba(255, 255, 255, 0.2)' : 'none', // Border only when scrolled
        boxShadow: scrollPosition > 0 ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none', // Soft shadow when scrolled
        transition: 'background 0.3s ease, backdrop-filter 0.3s ease, border 0.3s ease', // Smooth transition
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            fontSize: '1.5rem',
          }}
        >
          eGamer Sponsorship
        </Typography>
        {isMobile ? (
          <Button color="inherit">Menu</Button> // Placeholder for mobile menu toggle
        ) : (
          <div>
            <Button color="inherit" href="/games">Games</Button>
            <Button color="inherit" href="/top-players">Top Players</Button>
            <Button color="inherit" href="/contact-us">Contact Us</Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
