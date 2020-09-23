import React, { useState } from 'react';
import {} from '@material-ui/core';
import useStyles from './styles';
import ModuleCards from '../../molecules/ModuleCards/ModuleCards';
import ModulesDialog from '../ModulesDialog/ModulesDialog';
interface ArticleCardsProps {}

const articles = [
  {
    title: 'game intelligence',
    img: require('../../../media/images/camp.jpg'),
  },
  {
    title: 'motivation',
    img: require('../../../media/images/camp.jpg'),
  },
  {
    title: 'how we work',
    img: require('../../../media/images/camp.jpg'),
  },
];

interface ArticleCardsProps {}

const ArticleCards: React.FC<ArticleCardsProps> = ({}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <ModuleCards
        heading='knowledge modules'
        data={articles}
        onClick={handleClickOpen}
      />
      <ModulesDialog
        title='modules'
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        open={open}
      />
    </React.Fragment>
  );
};

export default ArticleCards;
