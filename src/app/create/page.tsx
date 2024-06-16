'use client'

import { useState } from 'react';
import { SiFoodpanda } from 'react-icons/si';
import { FaInfo, FaUserNinja, FaPlayCircle } from 'react-icons/fa';
import { IoDocumentOutline } from "react-icons/io5";

import { Card } from 'react-bootstrap';
import { useBoundStore } from '../store/index'
import styles from "./page.module.css";
import Steps from '../components/Steps/Steps';
import Step1 from '../components/Steps/Step1';
import Step2 from '../components/Steps/Step2';
import Step3 from '../components/Steps/Step3';
import Step4 from '../components/Steps/Step4';

const stepsData = [
  { icon: <SiFoodpanda />, title: 'Choose Animal' },
  { icon: <FaInfo />, title: 'Choose Name' },
  { icon: <FaUserNinja />, title: 'Choose Weapon' },
  { icon: <IoDocumentOutline />, title: 'Create' },
];

const CreatePage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { step, setStep } = useBoundStore()

  return (

      <Card className={`${styles.cardBody} m-lg-5`}>
        <Card.Body >
          <Steps steps={stepsData} currentStep={step} />
          {step === 1 && <Step1 next={() => setStep(2)} />}
          {step === 2 && <Step2 next={() => setStep(3)} back={() => setStep(1)} />}
          {step === 3 && <Step3 next={() => setStep(4)} back={() => setStep(2)} />}
          {step === 4 && <Step4 next={() => setStep(5)} back={() => setStep(3)} />}
        </Card.Body>
      </Card>

  );
};

export default CreatePage;