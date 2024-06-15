'use client'

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { RiBearSmileLine } from "react-icons/ri";
import { Animal } from '../../types/animal';
import styles from './Step.module.css'; 

interface SelectedAnimalCardProps {
  selectedAnimal: Animal;
  showInfo?: boolean;
}

const SelectedAnimalCard: React.FC<SelectedAnimalCardProps> = ({ selectedAnimal, showInfo = true }) => {
  return (
    <Card className={`bg-secondary text-light border-1 ${selectedAnimal.image !== 'placeholder.png' ? styles.yellowGlow : ''}`}>
      <Card.Body className="d-flex flex-column align-items-center">
        <div className="d-flex align-items-start">
          <div className={`${styles.animalCircle} rounded-circle mb-3`}>
            {selectedAnimal.image === 'placeholder.png' ? (
              <RiBearSmileLine size={200} className={`${styles.bgCircle} rounded-circle`} />
            ) : (
              <img src={`${selectedAnimal.image}`} alt={selectedAnimal.name} width={300} height={300} className={`${styles.bgCircle} img-fluid rounded-circle`} />
            )}
          </div>
          {showInfo && (
            <div className={`${styles.animalInfo} px-3`}>
              <h4>{selectedAnimal.name}</h4>
              <p className={styles.description}>{selectedAnimal.description}</p>
            </div>
          )}
        </div>
       
      </Card.Body>
    </Card>
  );
};

export default SelectedAnimalCard;
