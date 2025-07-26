

import React from 'react';

type Props = {
  title: string;
  onClick: () => void;
};

export default function CourseCard({ title, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      style={styles.card}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <h2>{title}</h2>
    </div>
  );
}

const styles = {
  card: {
    cursor: 'pointer',
    padding: '2rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '200px',
    textAlign: 'center' as const,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
  }
};