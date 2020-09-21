import React from 'react';
import { Modal } from '@material-ui/core';
import useStyles from './styles';
import { motion } from 'framer-motion';
import { variantVideo } from './variants';

interface VideoModalProps {
  open: boolean;
  handleClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ open, handleClose }) => {
  const classes = useStyles();
  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'>
      <motion.div variants={variantVideo} initial='hidden' animate='visible'>
        <video width='100%' height='auto' controls autoPlay>
          <source
            src={require('../../../media/videos/soccer.mp4')}
            type='video/mp4'
          />
        </video>
      </motion.div>
    </Modal>
  );
};

export default VideoModal;
