export const variantMenu = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 17,
    },
  },
};
export const variantList = {
  hidden: {
    opacity: 0,
    y: 300,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 30,
      staggerChildren: 0.3,
    },
  },
};
export const variantChild = {
  hidden: {
    opacity: 0,
    y: 300,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 30,
    },
  },
};
