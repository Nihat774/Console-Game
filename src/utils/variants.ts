export const containerVariants = {
    hidden: {
      // x: "100vw",
      opacity: 0,
    },
    visible: {
      // x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay: 0.2,
        stiffness:60
      },
    },
    exit: {
      // x: "-100vh",
      transition: {
        ease: "easeInOut",
      },
    },
  };
  