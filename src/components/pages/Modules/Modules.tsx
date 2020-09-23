import React from 'react';
import { Container, Grid } from '@material-ui/core';
import useStyles from './styles';
import VideoCards from '../../organisms/VideoCards/VideoCards';
import ArticleCards from '../../organisms/ArticleCards/ArticleCards';

interface ModulesProps {}

const Modules: React.FC<ModulesProps> = ({}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth='lg'>
        <Grid direction='column-reverse' container>
          <VideoCards />
          <ArticleCards />
        </Grid>
      </Container>
    </div>
  );
};

export default Modules;
