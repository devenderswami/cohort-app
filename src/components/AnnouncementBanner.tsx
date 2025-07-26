

import React from 'react';
import styles from './AnnouncementBanner.module.css';

export default function AnnouncementBanner() {
  return (
    <header className={styles.banner}>
      <span className={styles.cohortAnnouncement}>
        🎓 Join Cohort 1 for FREE! <strong>₹999</strong> | Starts August 1st. Want to study together?
        <a href="https://your-whatsapp-link" target="_blank" rel="noopener noreferrer"> Join the WhatsApp group</a>.
      </span>
    </header>
  );
}