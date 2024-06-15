'use client'

import React from 'react';
import styles from './Step.module.css';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  active: boolean;
}

const Step: React.FC<StepProps> = ({ icon, title, active }) => (
  <div className={`px-3 ${styles.stepContainer} ${active ? styles.stepContainerActive : ''}`}>
    <div className={styles.iconContainer}>
      <div className={styles.icon}>{icon}</div>
    </div>
    <span className={`${styles.title} ${active ? styles.titleActive : ''}`}>{title}</span>
  </div>
);

export default Step;