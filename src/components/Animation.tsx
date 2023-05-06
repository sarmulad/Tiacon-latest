export const Fade={
    offscreen:{ opacity:0},
    onscreen:{
    opacity:1,
    transition:{type:"spring", duration: 1, delay: 6 }

  }
}
export const SectionFade={
    offscreen:{ opacity:0},
    onscreen:{
    opacity:1,
    transition:{type:"spring", duration: 1, delay: 0 }

  }
}

export const imageAnimate={
    offscreen:{x:500, opacity:0},
    onscreen:{
    x:0,
    opacity:1,
    // rotate:[0,10,0],
    transition: {type:"spring",
    // bounce:0.4,
    duration:1, delay:0}
  }
}

export const containerVariants = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };
