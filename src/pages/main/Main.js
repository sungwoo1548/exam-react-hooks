import React from 'react';

import styles from './Main.module.css';

export default function Main({ children }) {
  return (
    <main>
      <div className={styles.mainWrapper}>
        <div className={styles.mainContainer}>
          {children}
        </div>
      </div>
    </main>
  )
}
