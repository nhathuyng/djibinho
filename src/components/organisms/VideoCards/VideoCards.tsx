import React from 'react';
import {} from '@material-ui/core';
import useStyles from './styles';
import ModuleCards from '../../molecules/ModuleCards/ModuleCards';

interface VideoCardsProps {}

const videos = [
  {
    title: 'technique',
    img: require('../../../media/images/camp.jpg'),
  },
  {
    title: 'passing',
    img: require('../../../media/images/camp.jpg'),
  },
  {
    title: 'shooting',
    img: require('../../../media/images/camp.jpg'),
  },
];

interface VideoCardsProps {}

const VideoCards: React.FC<VideoCardsProps> = ({}) => {
  const classes = useStyles();
  return (
    <ModuleCards
      heading='videos'
      data={videos}
      onClick={() => console.log('f')}
    />
  );
};

export default VideoCards;
