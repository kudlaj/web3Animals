'use client'

import React, { useState, useEffect } from 'react';
import { Card, Button, ListGroup, Badge } from 'react-bootstrap';
import { RiBearSmileLine } from "react-icons/ri";
import { FaInfoCircle } from 'react-icons/fa'; // Import FaInfoCircle
import { IoCloseCircleOutline } from "react-icons/io5";
import { Animal } from '../../types/animal';
import styles from './Cards.module.css';

interface SelectedAnimalCardProps {
  selectedAnimal: Animal;
  showInfo?: boolean;
}

const SelectedAnimalCard: React.FC<SelectedAnimalCardProps> = ({ selectedAnimal, showInfo = true }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  const getAllAnimalProperties = (selectedAnimal: Animal) => {
    return Object.entries(selectedAnimal?.properties || {})
      .filter(([key, value]) => value !== undefined)
      .map(([key, value]) => ({ key, value: value as number }));
  };

  useEffect(() => {
    setIsFlipped(false);
  }, [selectedAnimal]);

  return (
    <Card className={`${styles.selectedAnimalCard} bg-secondary text-light border-1 position-relative ${selectedAnimal.image !== 'placeholder.png' ? styles.yellowGlow : ''}`} >
      {selectedAnimal.image != 'placeholder.png' ? (
        isFlipped ? (
          <IoCloseCircleOutline size={34} className={`position-absolute top-0 end-0 m-3 text-light ${styles.cursorPointer}`} onClick={handleFlip} />
        ) : (
          <FaInfoCircle size={34} className={`position-absolute top-0 end-0 m-3 text-light ${styles.cursorPointer}`} onClick={handleFlip} />
        )
      ) : (
        <></>
      )}
      {!isFlipped ? (
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
      ) : (
        <Card.Body className={`d-flex flex-column align-items-center `}>
          <div className={`${styles.animalInfo} px-3 text-left`}>
            <h4>Properties</h4>
            <ListGroup variant="flush" className="w-100">
              {getAllAnimalProperties(selectedAnimal).map((property, index) => (
                <ListGroup.Item key={index} className="d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div >{property.key}</div>
                  </div>
                  <h5><Badge bg="success" pill>
                    {property.value}
                  </Badge></h5>
              </ListGroup.Item>
              
              ))}
            </ListGroup>
          </div>
        </Card.Body>
      )}
    </Card>
  );
};

export default SelectedAnimalCard;
