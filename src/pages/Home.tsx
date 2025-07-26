//import React, { useState } from 'react';
import { FaBrain, FaCog, FaFileAlt, FaUserGraduate, FaMapMarkedAlt, FaRegStickyNote, FaTools, FaRoute, FaUsers, FaBolt, FaQuestionCircle, FaEdit } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import AnnouncementBanner from '../components/AnnouncementBanner';
import styles from './Home.module.css';
import { useTranslation } from 'react-i18next';

export default function Home() {
 // const navigate = useNavigate();
  //const [showForm, setShowForm] = useState<'login' | 'signup' | null>(null);
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Navbar />
      <AnnouncementBanner />
      <main className={styles.mainContent}>
        <h1 className={styles.heroTitle}>
          {t('home.title.become')} <span className={styles.highlight}>{t('home.title.aiEngineer')}</span>
        </h1>
        <p className={styles.subheading}>
          {t('home.subtitle')}
        </p>
        <p className={styles.note}>
          {t('home.curriculumNote')}
        </p>

        <div className={styles.roadmapContainer}>
          <div className={styles.roadmapCard}>
            <FaBrain size={40} color="#6B46C1" />
            <h2>{t('home.aiRoadmap.title')}</h2>
            <p>{t('home.aiRoadmap.description')}</p>
            <button className={styles.primaryButton}>{t('home.startBuilding')}</button>
          </div>
          <div className={styles.roadmapCardDisabled}>
            <FaCog size={40} color="#A0AEC0" />
            <h2>{t('home.mlRoadmap.title')}</h2>
            <p>{t('home.mlRoadmap.description')}</p>
            <button className={styles.disabledButton} disabled>{t('home.comingSoon')}</button>
          </div>
        </div>

        <div className={styles.resumeCard}>
          <FaFileAlt size={32} color="#6B46C1" style={{ marginBottom: '0.5rem' }} />
          <div>
            <h3>Get an Instant AI Resume Score</h3>
            <p>Find out if your resume can beat the bots. Get an instant, AI-powered score against any job description before applying.</p>
          </div>
          <button className={styles.primaryButton}>Evaluate Now</button>
        </div>

        <section className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>Everything You Need to Succeed</h2>
          <p className={styles.sectionSubtitle}>
            Our platform is more than just a list of videos. It's a complete ecosystem designed for your success.
          </p>
          <div className={styles.featuresGrid}>
            <div className={styles.featureTile}>
              <FaUserGraduate className={styles.featureIcon} />
              <h3>AI Progress Coach</h3>
              <p>Your personal AI mentor, available 24/7 to answer questions, provide encouragement, and keep you on track.</p>
            </div>
            <div className={styles.featureTile}>
              <FaMapMarkedAlt className={styles.featureIcon} />
              <h3>Structured 12-Month Roadmap</h3>
              <p>A clear, comprehensive path from beginner to job-ready AI Engineer, with curated resources for every step.</p>
            </div>
            <div className={styles.featureTile}>
              <FaRegStickyNote className={styles.featureIcon} />
              <h3>Notion-Style Notes</h3>
              <p>A built-in, rich-text editor to take, format, and organize your personal notes for every topic.</p>
            </div>
            <div className={styles.featureTile}>
              <FaTools className={styles.featureIcon} />
              <h3>Hands-on Projects</h3>
              <p>Build a strong portfolio with practical, real-world projects that showcase your skills to potential employers.</p>
            </div>
            <div className={styles.featureTile}>
              <FaRoute className={styles.featureIcon} />
              <h3>Personalized Learning Paths</h3>
              <p>Tailor the curriculum to your career goals, whether you're an entry-level dev or a senior leader.</p>
            </div>
            <div className={styles.featureTile}>
              <FaUsers className={styles.featureIcon} />
              <h3>Community & Support</h3>
              <p>Learn alongside a cohort of peers. Join our WhatsApp group to ask questions, share progress, and collaborate.</p>
            </div>
            <div className={styles.featureTile}>
              <FaBolt className={styles.featureIcon} />
              <h3>Personalized Motivation</h3>
              <p>Stay motivated with AI-powered encouragement and progress tracking that celebrates your achievements.</p>
            </div>
            <div className={styles.featureTile}>
              <FaQuestionCircle className={styles.featureIcon} />
              <h3>Over 171+ Practice Questions</h3>
              <p>Test your knowledge with interview-style questions and get instant AI-powered feedback on your answers.</p>
            </div>
            <div className={styles.featureTile}>
              <FaEdit className={styles.featureIcon} />
              <h3>Community-Driven Content</h3>
              <p>Help improve the curriculum for everyone by suggesting edits and new resources directly within the roadmap.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
