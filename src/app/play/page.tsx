'use client'

import { useState } from 'react';
import Fight from '@/components/play/Fight';

import { Card } from 'react-bootstrap';
import { useBoundStore } from '../store/index'
import styles from "./page.module.css";




const CreatePage: React.FC = () => {


  return (

      <Card className={`${styles.cardBody} m-lg-5`}>
        <Card.Body >
          <Fight />
        </Card.Body>
      </Card>

  );
};

export default CreatePage;