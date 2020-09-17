import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import useStyles from './styles';
import NavLinks from '../../molecules/NavLinks/NavLinks';
import Logo from '../../atoms/Logo/Logo';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}): JSX.Element => {
  const classes = useStyles();
  return (
    <AppBar position='fixed' color='transparent' elevation={0}>
      <Toolbar className={classes.toolbar}>
        <NavLinks />
        <Logo />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
