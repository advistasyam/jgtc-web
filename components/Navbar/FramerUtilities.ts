const menuVariants = {
  opened: {
    top: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
  closed: {
    top: "-90vh",
  },
}

const programsArrowButton = {
  opened: {
    rotate: -180,
  },
  closed: {
    rotate: 0,
  },
}

const programsMenuVariants = {
  opened: {
    height: "170px",
    left: "-20px",
    opacity: 1
  },
  closed: {
    height: "0px",
    left: "-20px",
    opacity: 0
  },
}

export { menuVariants, programsArrowButton, programsMenuVariants }
