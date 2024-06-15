import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import SelectedAnimalCard from './SelectedAnimalCard'; 
import WeaponCard from './WeaponCard'; 
import styles from './Step.module.css';
import { useBoundStore } from '../../store/index'
import { Animal } from '../../store/types/animal';

interface StepProps {
  next: () => void;
  back: () => void;
}



const Step3: React.FC<StepProps> = ({ next, back }) => {
  const { weapons, selectedAnimal, resetSelectedAnimal, setSelectedAnimalImage } = useBoundStore();

  const setSelectedWeapon = (weaponId: number) => {
   if (weaponId === 1) {
    setSelectedAnimalImage('/weapons/panda_umbrella.png');
   } else if (weaponId === 2) {
    setSelectedAnimalImage('/weapons/panda_pillow.png');
   } else if (weaponId === 3) {
    setSelectedAnimalImage('/weapons/panda_chainsaw.png');
   } 
  }
  // Define a default animal
  const defaultAnimal: Animal = {
    name: "Select Your Animal",
    image: "placeholder.png",
    description: "Select Your Animal"
  };
  
  return (
  <Container fluid className="text-center text-light py-5" style={{ minWidth: '70vw' }}>
      <Row className="mb-5">
        <Col>
          <h1 className="display-4">Choose your Weapon</h1>
          <p>Choose wisely, their lifes depend on it .</p>
          <div className="d-flex justify-content-center">
          <Button variant="warning" onClick={() => back()} className="rounded-pill px-4 py-2 mx-2">Back</Button>
          <Button variant="light" onClick={() => resetSelectedAnimal()} className="rounded-pill px-4 py-2 mx-2">RESET</Button>
          <Button variant="success" className="rounded-pill px-4 py-2 mr-2" onClick={() => void(0)}>Save and Continue</Button>
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
            {weapons.map((weapon, index) => (
              <Col md={6} key={weapon.image}> {/* Each animal card takes up half the width of the parent column, ensuring only two cards per row */}
                <WeaponCard 
                  image={weapon.image} 
                  name={weapon.name} 
                  description={weapon?.description ?? ''} 
                  onClick={() => setSelectedWeapon(weapon.id) } // Function to set the selected animal
                  selected={selectedAnimal?.weapon?.name === weapon.name} // Check if the animal is selected
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Step3;
