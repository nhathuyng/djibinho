import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './styles';

interface VideoCardsProps {}

const VideoCards: React.FC<VideoCardsProps> = ({}) => {
  const classes = useStyles();
  return (
    <Grid item>
      <Typography variant='h3' color='initial'>
        KNOWLEDGE MODULES
      </Typography>
    </Grid>
  );
};

export default VideoCards;
