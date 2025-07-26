//import React, { useState } from 'react';
import { FaBrain, FaCog, FaFileAlt, FaUserGraduate, FaMapMarkedAlt, FaRegStickyNote, FaTools, FaRoute, FaUsers, FaBolt, FaQuestionCircle, FaEdit } from 'react-icons/fa';
import Navbar from '../components/navbar';
import AnnouncementBanner from '../components/AnnouncementBanner';
import styles from './Home.module.css';

export default function Home() {
 // const navigate = useNavigate();
  //const [showForm, setShowForm] = useState<'login' | 'signup' | null>(null);

  return (
    <div className={styles.container}>
      <Navbar />
      <AnnouncementBanner />
      <main className={styles.mainContent}>
        <h1 className={styles.heroTitle}>
          Become an <span className={styles.highlight}>AI/ML Engineer</span>
        </h1>
        <p className={styles.subheading}>
          Your 12-Month 2025 Roadmap to a High-Value Career
        </p>
        <p className={styles.note}>
          *This curriculum is heavily focused on building practical AI Engineer skills. We cover foundational ML concepts, with a dedicated ML roadmap coming soon.
        </p>

        <div className={styles.roadmapContainer}>
          <div className={styles.roadmapCard}>
            <FaBrain size={40} color="#6B46C1" />
            <h2>AI Engineer Roadmap</h2>
            <p>A 12-month, project-based curriculum to become a job-ready AI Engineer. Focus on practical skills and real-world applications.</p>
            <button className={styles.primaryButton}>Start Building</button>
          </div>
          <div className={styles.roadmapCardDisabled}>
            <FaCog size={40} color="#A0AEC0" />
            <h2>ML Researcher Roadmap</h2>
            <p>Deep dive into theory, algorithms, and research for innovative ML models.</p>
            <button className={styles.disabledButton} disabled>Coming Soon</button>
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
