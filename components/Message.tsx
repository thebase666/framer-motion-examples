import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloseButton } from "./CloseButton.js";
import styles from './Message.module.css'

export const Message = () => {
  const [notifications, setNotifications] = useState([0]);

  const remove = (arr: number[], item: number) => {
    const newArr = [...arr];
    newArr.splice(newArr.findIndex(i => i === item), 1);
    return newArr;
  };

  let newIndex = 0;
  const add = (arr: number[]) => {
    newIndex++;
    return [...arr, newIndex];
  };


  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        <AnimatePresence initial={false}>
          {notifications.map(id => (
            <motion.li
              className={styles.li}
              key={id}
              // positionTransition
              initial={{ opacity: 0, y: 50, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            >
              <CloseButton
                close={() => setNotifications(remove(notifications, id))}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      <button
        className={styles.buttonAdd}
        onClick={() => setNotifications(add(notifications))}
      >
        <p className="text-white">+</p>
      </button>
    </div>
  );
};
