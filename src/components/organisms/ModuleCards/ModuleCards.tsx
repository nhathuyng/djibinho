import React, { useState } from 'react';
import {
  Grid,
  Typography,
  Button,
  Dialog,
  AppBar,
  Toolbar,
  Slide,
} from '@material-ui/core';
import useStyles from './styles';
import ModuleCard from '../../molecules/ModuleCard/ModuleCard';
import { TransitionProps } from '@material-ui/core/transitions';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../state/store/store';
import { setDialog } from '../../../state/store/slices';
import { IData } from '../../../other/interfaces';
import { motion } from 'framer-motion';
import { variantModules, variantChild } from './variants';
import useAnimInView from '../../../state/hooks/useAnimInView';

interface ModuleCardsProps {
  // data: { title: string; img: string; id: number }[];
  // onClick: () => void;
  // heading: string;
  // open: boolean;
  // handleClose: () => void;
  // handleClickOpen: () => void;
  // title: string;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const ModuleCards: React.FC<ModuleCardsProps> = ({}) => {
  const classes = useStyles();
  const { animation, ref } = useAnimInView();
  const [data, setData] = useState<IData>({ title: '', img: '', id: '' });

  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);

  React.useEffect(() => {
    if (state.dataState.dialog.open) {
      const currentImg = state.dataState.img.find(
        (img: IData) => img.id === state.dataState.dialog.currentId
      )!;
      setData(currentImg!);
    }
  }, [state.dataState.dialog.open]);

  return (
    <Grid
      className={classes.root}
      component={motion.div}
      ref={ref}
      variants={variantModules}
      initial='hidden'
      animate={animation}
      container
      spacing={6}>
      {state.dataState.img.map(({ title, img, id }) => (
        <Grid key={id} item xs={12} md={6}>
          <motion.div variants={variantChild}>
            <ModuleCard
              onClick={() => {
                dispatch(setDialog({ currentId: id, open: true }));
              }}
              title={title}
              img={img}
            />
          </motion.div>
        </Grid>
      ))}
      <Dialog
        fullScreen
        open={state.dataState.dialog.open}
        onClose={() => dispatch(setDialog({ currentId: '', open: false }))}
        TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant='h6' className={classes.title}>
              {data.title.toUpperCase()}
            </Typography>

            <Button
              autoFocus
              color='inherit'
              onClick={() => {
                dispatch(setDialog({ currentId: '', open: false }));
                setData({ title: '', img: '', id: '' });
              }}>
              close
            </Button>
          </Toolbar>
        </AppBar>
      </Dialog>
    </Grid>
  );
};

export default ModuleCards;
