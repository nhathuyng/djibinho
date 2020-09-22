export const variantValues = {
  hidden: {
    opacity: 0,
    x: 200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 20,
      staggerChildren: 0.5,
      // when: 'beforeChildren',
    },
  },
};
export const variantContainer = {
  hidden: {
    opacity: 0,
    x: 200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 20,
    },
  },
};

export const variantHeading = {};

export const variantContent = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2,
      type: 'tween',
      duration: 2,
    },
  },
};
