import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';
import useStyles from './styles';
import { motion } from 'framer-motion';

interface ModuleCardProps {
  title: string;
  img: string;
  onClick: () => void;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ title, img, onClick }) => {
  const classes = useStyles();
  return (
    <motion.div>
      <Card className={classes.card}>
        <CardMedia
          component={Button}
          className={classes.media}
          title={title}
          image={img}
          onClick={onClick}
        />
        <CardContent className={classes.content}>
          <Typography className={classes.typo} variant='h5'>
            {title.toUpperCase()}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ModuleCard;
