export const scrollVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.25,
    },
  },
};

export const accordianVariants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
