export const variantLink = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      type: 'spring',
      stiffness: 30,
      duration: 2,
      delay: 2.25,
    },
  },
};

// export const variantTypo = {
//   hover: {
//     color: '#234586',
//     transition: {
//       type: 'tween',
//       duration: 0.4,
//       ease: 'easeInOut',
//     },
//   },
// };

export const variantUnderline = {
  hidden: {
    width: 0,
    opacity: 0,
    ease: 'easeOut',
    duration: 0.2,
    type: 'tween',
  },
  hover: {
    width: '100%',
    opacity: 1,
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeIn',
    },
  },
};
