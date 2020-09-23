import React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import useStyles from './styles';
import NavLinks from '../../molecules/NavLinks/NavLinks';
import Logo from '../../atoms/Logo/Logo';
import Title from '../../atoms/Title/Title';
import { useTheme } from '@material-ui/core/styles';
import Burger from '../../molecules/Burger/Burger';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}): JSX.Element => {
  const classes = useStyles();

  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesLG = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <AppBar position='static' color='transparent' elevation={0}>
      <Toolbar disableGutters className={classes.toolbar}>
        <Box display='flex' alignItems='center'>
          <Title />
        </Box>
        <Box display='flex'>{matchesLG ? <NavLinks /> : <Burger />}</Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
