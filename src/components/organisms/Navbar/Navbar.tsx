import React from 'react';
import { AppBar, Toolbar, Box, Typography } from '@material-ui/core';
import useStyles from './styles';
import NavLinks from '../../molecules/NavLinks/NavLinks';
import Logo from '../../atoms/Logo/Logo';
import Title from '../../atoms/Title/Title';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}): JSX.Element => {
  const classes = useStyles();
  return (
    <AppBar position='static' color='transparent' elevation={0}>
      <Toolbar disableGutters className={classes.toolbar}>
        <Box display='flex' alignItems='center'>
          <Logo />
          <Title />
        </Box>
        <Box display='flex'>
          <NavLinks />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
