import React, { useState, useEffect } from 'react'

import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { Drag } from "../components/Drag";
import Sidebar from "../components/Sidebar";
import Modal from "../components/Modal";
import Tab from "../components/Tab";
import { Message } from "../components/Message";
import { Check } from "../components/Check";
import Dropdown from "../components/Dropdown";
import Path from "../components/Path";








const play = () => {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);


  return (
    <div className='flex flex-col items-center justify-start min-h-screen p-10 bg-blue-400'>

      <Path />

      <div className='h-[200px] mt-10'>
        <motion.div
          className="w-20 h-20 bg-blue-800"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
      </div>

      <div className='h-[200px] '>
        <Modal />
      </div>

      {/* <div className='h-[200px]  relative'>
        <Drag />
      </div> */}

      <Check />
      <Tab />

      <Message />
      <Sidebar />
      <Dropdown />




    </div >



  )
}

export default play