export const variantContainer = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,

    transition: {
      type: 'spring',
      delay: 1.45,
      stiffness: 20,
      staggerChildren: 1,
    },
  },
};

export const variantChildren = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
