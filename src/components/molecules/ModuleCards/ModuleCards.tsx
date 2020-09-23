import React from 'react';
import { Grid, Typography, Box, useMediaQuery } from '@material-ui/core';
import useStyles from './styles';
import ModuleCard from '../ModuleCard/ModuleCard';
import { useTheme } from '@material-ui/core/styles';

interface ModuleCardsProps {
  data: { title: string; img: string }[];
  onClick: () => void;
  heading: string;
}

const ModuleCards: React.FC<ModuleCardsProps> = ({
  data,
  onClick,
  heading,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Grid item>
      <Typography
        align='center'
        className={classes.typo}
        variant='h3'
        color='initial'>
        {heading.toUpperCase()}
      </Typography>
      <Box
        flexDirection={matchesLG ? 'row' : 'column'}
        display='flex'
        justifyContent='space-between'>
        {data.map(({ title, img }) => (
          <ModuleCard key={title} onClick={onClick} title={title} img={img} />
        ))}
      </Box>
    </Grid>
  );
};

export default ModuleCards;
