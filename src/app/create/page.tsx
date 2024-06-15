'use client'

import { useState } from 'react';
import { SiFoodpanda } from 'react-icons/si';
import { FaInfo, FaUserNinja } from 'react-icons/fa';
import { Card } from 'react-bootstrap';
import { useBoundStore } from '../store/index'
import styles from "./page.module.css";
import Steps from '../components/Steps/Steps';
import Step1 from '../components/Steps/Step1';
import Step2 from '../components/Steps/Step2';
import Step3 from '../components/Steps/Step3';

const stepsData = [
  { icon: <SiFoodpanda />, title: 'Step 1: Choose Animal' },
  { icon: <FaInfo />, title: 'Step 2: Name' },
  { icon: <FaUserNinja />, title: 'Step 3: Choose Weapon' }
];

const CreatePage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { step, setStep } = useBoundStore()

  return (

      <Card className={`${styles.cardBody} m-5`}>
        <Card.Body >
          <Steps steps={stepsData} currentStep={step} />
          {step === 1 && <Step1 next={() => setStep(2)} />}
          {step === 2 && <Step2 next={() => setStep(3)} back={() => setStep(1)} />}
          {step === 3 && <Step3 next={() => setStep(4)} back={() => setStep(2)} />}
        </Card.Body>
      </Card>

  );
};

export default CreatePage;