import React from 'react'
import { carousel } from '../data/data'
import { motion } from "framer-motion";

const ImageSlider = () => {
    const animation = {
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 360, 360, 0],
        carousel:carousel
      };
    
    const transition = {
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      loop: Infinity,
      repeatDelay: 1,
    };

    for ( let element of carousel ) {

        // display the values
        console.log(element);
    }
  return (
    <section className=''>
        <motion.div className='flex gap-4 overflow-hidden' >
            {carousel.map((item) => (
                <motion.img src={item} alt=""  transition={{ ease: 'linear', repeat: Infinity, duration: 4 }} animate={animation} 
               
                whileHover={{ scale: 1.2 }}
                />
            ))}
        </motion.div>
 
      </section>
  )
}

export default ImageSlider