import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './styles';
import ModuleCard from '../../molecules/ModuleCard/ModuleCard';

interface ArticleCardsProps {}

const ArticleCards: React.FC<ArticleCardsProps> = ({}) => {
  const classes = useStyles();
  return (
    <Grid item>
      <Typography variant='h3' color='initial'>
        VIDEOS
      </Typography>
      <ModuleCard
        onClick={() => console.log('clicky')}
        title='soccer'
        img={require('../../../media/images/camp.jpg')}
      />
    </Grid>
  );
};

export default ArticleCards;
