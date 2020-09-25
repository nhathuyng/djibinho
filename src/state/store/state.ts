import { v4 as uuidv4 } from 'uuid';
import { IData } from '../../other/interfaces';

export const initialData: IData[] = [
  {
    title: 'game intelligence',
    img: require('../../media/images/camp.jpg'),
    id: uuidv4(),
  },
  {
    title: 'motivation',
    img: require('../../media/images/camp.jpg'),
    id: uuidv4(),
  },
  {
    title: 'how we work',
    img: require('../../media/images/camp.jpg'),
    id: uuidv4(),
  },

  {
    title: 'technique',
    img: require('../../media/images/camp.jpg'),
    id: uuidv4(),
  },
  {
    title: 'passing',
    img: require('../../media/images/camp.jpg'),
    id: uuidv4(),
  },
  {
    title: 'shooting',
    img: require('../../media/images/camp.jpg'),
    id: uuidv4(),
  },
];
