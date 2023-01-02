import React, { useState, useEffect } from 'react'

import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "../components/MenuToggle";
import { Navigation } from "../components/Navigation";
import { useDimensions } from "../utils/useDimensions";
import styles from './Sidebar.module.css'

function Sidebar() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 28px 42px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 28px 42px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}// const { height } = useDimensions(containerRef);
      ref={containerRef}
      className={styles.nav}
    >
      <motion.div className={styles.background} variants={sidebar} />
      {/* 通过父元素的animate是open还是closed 来走variants */}
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.div>
  )
}

export default Sidebar