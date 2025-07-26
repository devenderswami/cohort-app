

import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLogo}>SwamiCamp</div>
      <div className={styles.navLinks}>
        <a href="#" className={styles.navItem}>AI Roadmap</a>
        <div className={styles.dropdown}>
          <button className={styles.dropdownToggle}>Features ▾</button>
          <div className={styles.dropdownMenu}>
            <a href="#">Practice Questions</a>
            <a href="#">Resume Evaluator</a>
            <a href="#">Leaderboard</a>
            <a href="#">My Notes</a>
          </div>
        </div>
        <button className={styles.loginButton}>Login</button>
      </div>
    </nav>
  );
}