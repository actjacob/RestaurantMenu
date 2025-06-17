import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const menuItems = [
  { text: 'Home', href: '#home' },
  { text: 'How it works', href: '#how-it-works' },
  { text: 'Meals', href: '#meals' },
  { text: 'Testimonials', href: '#testimonials' },
  { text: 'Pricing', href: '#pricing' },
  { text: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSmoothScroll = (e: React.MouseEvent<Element>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 72,
        behavior: 'smooth',
      });
      setMobileOpen(false);
    }
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem
          button
          key={item.text}
          onClick={(e) => handleSmoothScroll(e, item.href)}
          sx={{
            borderRadius: 2,
            my: 1,
            px: 2,
            '&:hover': {
              backgroundColor: 'rgba(230, 126, 34, 0.08)',
            },
            fontWeight: 500,
          }}
        >
          <ListItemText
            primary={item.text}
            primaryTypographyProps={{
              sx: {
                fontSize: '1.2rem',
                fontWeight: 500,
              },
            }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={isScrolled ? 4 : 0}
        sx={{
          background: isScrolled
            ? 'rgba(255,255,255,0.98)'
            : 'rgba(34,40,49,0.15)',
          boxShadow: isScrolled ? 1 : 'none',
          transition: 'all 0.3s',
          borderRadius: 0,
          px: { xs: 0, sm: 2 },
          backdropFilter: isScrolled ? undefined : 'blur(6px)',
        }}
      >
        <Toolbar sx={{ minHeight: 72 }}>
          <IconButton
            color={isScrolled ? 'primary' : 'inherit'}
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: 'none' },
              color: isScrolled ? 'primary.main' : 'white',
              textShadow: isScrolled ? 'none' : '0 2px 8px rgba(0,0,0,0.25)',
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            component="a"
            href="#home"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: isScrolled ? 'primary.main' : 'white',
              fontWeight: 800,
              fontSize: '2rem',
              letterSpacing: '-1px',
              transition: 'color 0.3s',
              cursor: 'pointer',
              textShadow: isScrolled ? 'none' : '0 2px 8px rgba(0,0,0,0.25)',
            }}
            onClick={(e) => handleSmoothScroll(e, '#home')}
          >
            Restaurant Menu
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                sx={{
                  fontSize: '1.15rem',
                  fontWeight: 500,
                  mx: 1,
                  borderRadius: 99,
                  px: 2.5,
                  py: 1.2,
                  color: isScrolled ? 'secondary.main' : 'white',
                  textShadow: isScrolled
                    ? 'none'
                    : '0 2px 8px rgba(0,0,0,0.25)',
                  '&:hover': {
                    backgroundColor: 'rgba(230, 126, 34, 0.18)',
                    color: 'primary.main',
                  },
                  transition: 'all 0.2s',
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
            backgroundColor: 'white',
          },
        }}
      >
        {drawer}
      </Drawer>
      <Toolbar /> {/* Spacer for fixed navbar */}
    </>
  );
};

export default Navbar;
