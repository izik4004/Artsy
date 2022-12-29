import React from 'react'
import { carousel } from '../data/data'
import { motion } from "framer-motion";

const ImageSlider = () => {
    const animation = {
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 360, 360, 0],
        carousel:carousel
      };
    
    
  return (
    <section className=''>
        <motion.div className='flex gap-4 overflow-hidden' >
            {carousel.map((item) => (
                <motion.img src={item} alt=""  
              //  className="transform 1s ease-in-out"
                // whileHover={{ scale: 1.2 }}
                />
            ))}
        </motion.div>
 
      </section>
  )
}

export default ImageSlider