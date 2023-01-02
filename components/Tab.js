
import { useState } from "react";
import { initialTabs as tabs } from "../utils/tab";
import { motion, AnimatePresence } from "framer-motion";
import styles from './Tab.module.css'

export default function App() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className={styles.window}>
      <nav className={styles.nav}>
        <ul className='flex '>
          {tabs.map((item) => (
            <li
              key={item.label}
              className={item === selectedTab ? "bg-blue-200 h-10 cursor-pointer relative flex flex-1 rounded-md items-center justify-center" : "relative flex-1 flex rounded-sm items-center justify-center cursor-pointer"}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab ? (
                <motion.div className={styles.underline} layoutId="underline" > </motion.div>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>

      <main className={styles.main}>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {selectedTab ? selectedTab.icon : "😋"}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
