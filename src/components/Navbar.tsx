

import React from 'react';
import styles from './Navbar.module.css';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

export default function Navbar() {
  const { t } = useTranslation();
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLogo}>SwamiCamp</div>
      <div className={styles.navLinks}>
        <a href="#" className={styles.navItem}>{t('navigation.courses')}</a>
        <div className={styles.dropdown}>
          <button className={styles.dropdownToggle}>{t('navigation.features')} ▾</button>
          <div className={styles.dropdownMenu}>
            <a href="#">{t('navigation.practiceQuestions')}</a>
            <a href="#">{t('navigation.resumeEvaluator')}</a>
            <a href="#">{t('navigation.leaderboard')}</a>
            <a href="#">{t('navigation.myNotes')}</a>
          </div>
        </div>
        <button className={styles.loginButton}>{t('navigation.login')}</button>
        <LanguageSelector />
      </div>
    </nav>
  );
}