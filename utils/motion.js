export const navVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 140,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        delay: 0.8,
      },
    },
  };

  export const footerVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      transition: {
        type: 'tween',
        ease: 'easeOut',
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        ease: 'easeIn',
        duration: 0.5,
      },
    },
  };

  export const slideIn = (direction, type, delay, duration) => ({
    hidden: {
    opacity: 0,
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
    },
    show: {
      opacity: 1,  
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    }
  });

  export const fadeIn = (direction, type, delay, duration) => ({
    hidden: {
      x: direction === 'left' ? '100%' : direction === 'right' ? '-100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    }
  });

  export const staggerContainer = (staggerChildren, delayChildren) => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  });

  export const textContainer = {
    hidden: {
      opacity: 0,
    },
    show: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
    }),
  };
  
  export const textVariant = (delay) => ({
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay,
      },
    },
  });

  export const textVariant2 = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        ease: 'easeInOut',
        duration: 1,
      },
    },
  };

  export const squares = (delay) => ({
    hidden: {
      y: -100,
    },
    show: {
      y: -40,
      transition: {
        type: 'tween',
        ease: 'easeInOut',
        delay,
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'mirror'
      },
    },
  });

  export const charts = (delay) => ({
    hidden: {
      y: -10
    },
    show: {
      y: 0,
      transition: {
        type: 'tween',
        ease: 'easeInOut',
        delay,
        duration: 1,
        repeat: Infinity,
        repeatType: 'mirror'
      },
    },
  });

  export const skeletons = (delay) => ({
    hidden: {
      opacity:0,
    },
    show: {
      opacity: 1,
      transition: {
        type: 'tween',
        ease: 'easeInOut',
        delay,
        duration: 1.25,
        repeat: Infinity,
        repeatType: 'mirror'
      },
    },
  });

  export const binary = (delay) => ({
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      opacity: 1,
      scale: 0.75,
      transition: {
        type: 'tween',
        ease: 'easeInOut',
        delay,
        duration: 2,
        repeat: Infinity,
        repeatType: 'mirror'
      },
    },
  });

  export const LEDGlow = (delay) => ({
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        type: 'tween',
        ease: 'easeInOut',
        delay,
        duration: 1.175,
        repeat: Infinity,
        repeatType: 'mirror',
      },
    },
  });

  export const FirstPerson = (delay) => ({
    hidden: {
      originX: 0,
      originY: 0
    },
    show: {
      rotate: 10,
      transition: {
        type: 'tween',
        ease: 'easeInOut',
        delay,
        duration: 1.175,
        repeat: Infinity,
        repeatType: 'mirror'
      },
    },
  });

  export const RightArrow = {
    hidden: {
      x: -5
    },
    show: {
      x: 11,
      transition: {
        duration: 0.8,
        type: 'tween',
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse'
      }
    }
  };