export const variantCamp = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
      type: 'spring',
      stiffness: 10,
      staggerChildren: 0.5,
    },
  },
};

export const variantCampChild = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
      type: 'spring',
      stiffness: 10,
    },
  },
};
