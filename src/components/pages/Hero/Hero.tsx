import React from 'react';
import { Container, Grid } from '@material-ui/core';
import NavBar from '../../organisms/Navbar/Navbar';
import useStyles from './styles';
import HeroContent from '../../molecules/HeroContent/HeroContent';
import DownIndicator from '../../atoms/DownIndicator/DownIndicator';
import Logo from '../../atoms/Logo/Logo';

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth='lg'>
        <Logo />
        <NavBar />
        <Grid className={classes.container} container spacing={0}>
          <HeroContent />
        </Grid>
      </Container>
      <DownIndicator />
    </div>
  );
};

export default Hero;
