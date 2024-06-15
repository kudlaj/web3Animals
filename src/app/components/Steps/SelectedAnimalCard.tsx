'use client'

import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { RiBearSmileLine } from "react-icons/ri";
import { FaInfoCircle } from 'react-icons/fa'; // Import FaInfoCircle
import { Animal } from '../../types/animal';
import styles from './Step.module.css';

interface SelectedAnimalCardProps {
  selectedAnimal: Animal;
  showInfo?: boolean;
}

const SelectedAnimalCard: React.FC<SelectedAnimalCardProps> = ({ selectedAnimal, showInfo = true }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Card className={`${styles.selectedAnimalCard} bg-secondary text-light border-1 position-relative ${selectedAnimal.image !== 'placeholder.png' ? styles.yellowGlow : ''}`} style={{ maxWidth: '35rem' }}>
      {selectedAnimal.image != 'placeholder.png' ? (
        <FaInfoCircle size={34} className={`position-absolute top-0 end-0 m-3 text-light ${styles.cursorPointer}`} onClick={handleFlip} />
      ) : (
        <></>
      )}
      <Card.Body className={`d-flex flex-column align-items-center `}>
          <div className={`${styles.animalCircle} rounded-circle mb-3`}>
            {selectedAnimal.image === 'placeholder.png' ? (
              <RiBearSmileLine size={200} className={`${styles.bgCircle} rounded-circle`} />
            ) : (
              <img src={`${selectedAnimal.image}`} alt={selectedAnimal.name} width={300} height={300} className={`${styles.bgCircle} img-fluid rounded-circle`} />
            )}
          </div>
          {showInfo && (
            <div className={`${styles.animalInfo} px-3 text-left`}>
              <h4>{selectedAnimal.name}</h4>
              <p className={styles.description}>{selectedAnimal.description}</p>
            </div>
          )}
      </Card.Body>

    </Card>
  );
};

export default SelectedAnimalCard;
