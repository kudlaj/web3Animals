import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import SelectedAnimalCard from '../cards/SelectedAnimalCard'; 
import AnimalCard from '../cards/AnimalCard'; 
import styles from './Step.module.css';
import { useBoundStore } from '../../store/index'
import { Animal } from '../../types/animal';

interface StepProps {
  next: () => void;
}



const Step1: React.FC<StepProps> = ({ next }) => {
  const { animals, selectedAnimal, setSelectedAnimal, resetSelectedAnimal } = useBoundStore();
  const arrayAnimals: Animal[] = animals;

  // Define a default animal
  const defaultAnimal: Animal = {
    name: "Select Your Animal",
    image: "placeholder.png",
    description: "Select Your Animal",
    alias: "placeholder"
  };
  
  return (
  <Container fluid className="text-center text-light py-5" style={{ minWidth: '70vw' }}>
      <Row className="mb-5">
        <Col>
          <h1 className="display-4">Choose your animal</h1>
          <p>Choose wisely, their lifes depend on it .</p>
          <div className="d-flex justify-content-center">
          <Button variant="light" onClick={() => resetSelectedAnimal()} className="rounded-pill px-4 py-2 mx-2">RESET</Button>
          <Button variant="success" disabled={!selectedAnimal?.animal?.id} className="rounded-pill px-4 py-2 mr-2" onClick={next}>Save and Continue</Button>
        </div>
        </Col>
      </Row>
      <Row className="justify-content-center mb-5">
        <Col md={6} className="pr-md-5"> 
          <SelectedAnimalCard 
            selectedAnimal={selectedAnimal?.animal ?? defaultAnimal} 
          />
        </Col>
        <Col md={6}>
          <Row>
            {arrayAnimals.map((animal, index) => (
              <Col md={6} key={animal.image}> {/* Each animal card takes up half the width of the parent column, ensuring only two cards per row */}
                <AnimalCard 
                  image={animal.image} 
                  name={animal.name} 
                  description={animal.description} 
                  onClick={() => setSelectedAnimal(animal)} // Function to set the selected animal
                  selected={selectedAnimal?.animal?.name === animal.name} // Check if the animal is selected
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Step1;
