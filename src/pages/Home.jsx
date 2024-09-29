import React, { Component, useState } from 'react';
import { Box, Typography, Button, Avatar, IconButton, Container  } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import home_page_cover from '../assets/images/home_page_cover.jpg'
import default_user from '../assets/images/default_user.jpg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const players = [
    {
      id: 1,
      name: 'Dhruv1',
      club: 'Nike Training Club',
      image: default_user, 
    },
    {
      id: 2,
      name: 'Dhruv2',
      club: 'Nike Training Club',
      image: default_user, 
    },
    {
      id: 3,
      name: 'Dhruv3',
      club: 'Nike Training Club',
      image: default_user, 
    },

    {
        id: 4,
        name: 'Dhruv4',
        club: 'Nike Training Club',
        image: default_user, 
      },

      {
        id: 5,
        name: 'Dhruv5',
        club: 'Nike Training Club',
        image: default_user, 
      }
  ];

  const HeroSection = () => {
    return (
      <Box
        sx={{
          position: 'relative', // Make the container relative for overlay positioning
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '60vh',  // Full viewport height for a true hero section feel
          backgroundImage: `url(${home_page_cover})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          textAlign: 'center',
          padding: '2rem',
          marginTop: '-64px',  // Offset by the height of the AppBar (64px is the default)
        }}
      >
        {/* Blackish Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Black overlay with 50% opacity
            zIndex: 1, // Ensure the overlay appears above the background image
          }}
        />
  
        {/* Content */}
        <Box sx={{ position: 'relative', zIndex: 2 }}> {/* Ensure content is above the overlay */}
          <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
            Find the Best eGamers to Sponsor
          </Typography>
          <Typography variant="h6" sx={{ marginBottom: '2rem' }}>
            Connect with top talent in the gaming world and boost your brand.
          </Typography>
          <Button 
            variant="contained" 
            color="success" 
            sx={{ fontSize: '1rem', fontWeight: 'bold', padding: '0.75rem 2rem' }}
          >
            Explore Players
          </Button>
        </Box>
      </Box>
    );
  };
  
  

  const FeaturedPlayers = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [direction, setDirection] = useState(null); // 'next' or 'previous'

    const handleNext = () => {
        if (!isAnimating) {
            setDirection('next');
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % players.length);
                setIsAnimating(false);
            }, 500); // Match the CSS animation duration
        }
    };

    const handlePrevious = () => {
        if (!isAnimating) {
            setDirection('prev');
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex - 1 + players.length) % players.length);
                setIsAnimating(false);
            }, 500); // Match the CSS animation duration
        }
    };

    // Get the next three players based on the current index
    const displayedPlayers = [
        players[currentIndex % players.length],
        players[(currentIndex + 1) % players.length],
        players[(currentIndex + 2) % players.length],
    ];

    return (
        <Container
            maxWidth={false}
            sx={{
                maxWidth: '95vw',
                padding: '80px 20px',
                margin: '0 auto',
            }}
        >
            {/* Heading and Navigation */}
            <Box display="flex" justifyContent="space-between" alignItems="center" my={4}>
                <Box>
                    <Typography variant="h4" gutterBottom align="left">
                        Featured Players
                    </Typography>
                    <Typography variant="body1" align="left">
                        The Nike Training Club app offers a wide range of free workouts, personalized plans
                    </Typography>
                </Box>
                <Box>
                    <IconButton
                        aria-label="previous"
                        onClick={handlePrevious}
                        sx={{
                            marginRight: 1,
                            backgroundColor: '#fff',
                            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                            '&:hover': {
                                backgroundColor: '#f0f0f0',
                            },
                        }}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton
                        aria-label="next"
                        onClick={handleNext}
                        sx={{
                            backgroundColor: '#fff',
                            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                            '&:hover': {
                                backgroundColor: '#f0f0f0',
                            },
                        }}
                    >
                        <ArrowForwardIcon />
                    </IconButton>
                </Box>
            </Box>

            {/* Player Cards with Animation */}
            <Grid2 container spacing={2} alignItems="center" justifyContent="space-between" marginBottom={'30px'} marginTop={'80px'}>
                {displayedPlayers.map((player, index) => (
                    <Grid2
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={player.id}
                        sx={{
                            padding: '10px',
                            animation: isAnimating
                                ? direction === 'next'
                                    ? index === 0
                                        ? 'fadeOutLeft 0.5s forwards'
                                        : 'shiftLeft 0.5s forwards'
                                    : index === 2
                                    ? 'fadeOutRight 0.5s forwards'
                                    : 'shiftRight 0.5s forwards'
                                : 'none',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'left',
                                backgroundColor: '#f5f5f5',
                                borderRadius: '12px',
                                padding: '20px',
                                height: '180px',
                                width: '400px',
                            }}
                        >
                            <Avatar
                                alt={player.name}
                                src={player.image}
                                sx={{
                                    width: 80,
                                    height: 80,
                                }}
                            />
                            <Box sx={{ flexGrow: 1, marginLeft: '10px' }}>
                                <Typography fontSize={20}>
                                    <strong>{player.name}</strong>
                                </Typography>
                                <Typography fontSize={20} color="text.secondary">
                                    {player.club}
                                </Typography>
                                <Box marginTop={'30px'}>
                                    <Typography fontSize={20} color="text.secondary">
                                        Wins: 120 | Losses: 45 | Rank: 5
                                    </Typography>
                                </Box>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    sx={{
                                        marginTop: '10px',
                                        backgroundColor: '#000',
                                        fontSize: 15,
                                    }}
                                >
                                    Sponsor now
                                </Button>
                            </Box>
                        </Box>
                    </Grid2>
                ))}
            </Grid2>

            {/* Add the following CSS */}
            <style jsx>{`
                @keyframes fadeOutLeft {
                    0% {
                        opacity: 1;
                        transform: translateX(0);
                    }
                    100% {
                        opacity: 0;
                        transform: translateX(-100%);
                    }
                }

                @keyframes fadeOutRight {
                    0% {
                        opacity: 1;
                        transform: translateX(0);
                    }
                    100% {
                        opacity: 0;
                        transform: translateX(100%);
                    }
                }

                @keyframes shiftLeft {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }

                @keyframes shiftRight {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }

                @keyframes enterFromRight {
                    0% {
                        opacity: 0;
                        transform: translateX(100%);
                    }
                    100% {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes enterFromLeft {
                    0% {
                        opacity: 0;
                        transform: translateX(-100%);
                    }
                    100% {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </Container>
    );
};


class Home extends Component {
    state = { 
    };
  
    render() {
      return(
        <React.Fragment>
          <Header/>
          <HeroSection/>
          <FeaturedPlayers/>
          <Footer/>
        </React.Fragment>
      );
    };
}
  
export default Home; 