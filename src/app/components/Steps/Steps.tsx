'use client'

import React from 'react';
import Step from './Step';
import styles from './Steps.module.css';

interface StepData {
  icon: React.ReactNode;
  title: string;
}

interface StepsProps {
  steps: StepData[];
  currentStep: number;
}

const Steps: React.FC<StepsProps> = ({ steps, currentStep }) => (
  <div className={styles.stepsContainer}>
    {steps.map((step, index) => (
      <React.Fragment key={index}>
        <Step icon={step.icon} title={step.title} active={index === currentStep-1} />
        {index < steps.length - 1 && <div className={styles.line} />}
      </React.Fragment>
    ))}
  </div>
);

export default Steps;
