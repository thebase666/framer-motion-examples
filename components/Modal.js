import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";


function Modal() {

  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  return (
    <motion.div
      transition={{ layout: { duration: 0.6, type: 'spring' } }}
      layout
      onClick={() => setOpen(!open)}
      className='p-5 px-10 m-10 bg-white rounded-lg shadow-lg cursor-pointer'>

      <motion.p
        layout='position'
        className='w-24 my-3'>
        Click Me
      </motion.p>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className='w-96'>a portable musical instrument with metal reeds blown by bellows, played by means of keys and buttons.</p>
        </motion.div>
      )}


    </motion.div>
  )
}

export default Modal