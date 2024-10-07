import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#fff', // White background
        padding: '16px 0',
        textAlign: 'center',
        boxShadow: '0 -1px 10px rgba(0, 0, 0, 0.1)', // Optional: Adds a slight shadow to the top of the footer
        borderTop: '1px solid #ddd', // Optional: Border at the top for visual separation
      }}
    >
      {/* Left Section: Copyright */}
      <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '8px' }}>
        © 2024 eGamer Sponsorship Platform. All Rights Reserved.
      </Typography>

      {/* Right Section: Links */}
      <Box>
        <Link
          href="#"
          color="primary"
          sx={{ marginRight: '16px', textDecoration: 'none', fontWeight: '500' }}
        >
          Privacy Policy
        </Link>
        <Link href="#" color="primary" sx={{ textDecoration: 'none', fontWeight: '500' }}>
          Terms of Service
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
