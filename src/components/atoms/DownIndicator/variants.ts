export const variantArrow = {
  animate: {
    y: [-7, 0],
    transition: {
      yoyo: Infinity,
    },
  },
};

export const variantBox = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 15,
      delay: 0.6,
    },
  },
};
