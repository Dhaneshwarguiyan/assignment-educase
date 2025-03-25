import { motion } from "framer-motion"
import { ReactElement } from "react"

const animations = {
    initial: {
      opacity:0,
      transition:{duration:0.4}
    },
    animate: {
      opacity:1,
      transition:{duration:0.4}
    },
    exit: {
      opacity:0,
      transition:{duration:0.4}
    }
}

const AnimatedPages = ({children}:{children:ReactElement}) => {
  return (
    <motion.div 
    variants={animations} 
    initial="initial"
    animate="animate"
    exit="exit"
    >
      {children}
    </motion.div>
  )
}

export default AnimatedPages
