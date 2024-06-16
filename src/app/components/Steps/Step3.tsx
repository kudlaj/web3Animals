import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import SelectedAnimalCard from '../cards/SelectedAnimalCard'; 
import WeaponCard from '../cards/WeaponCard'; 
import styles from './Step.module.css';
import { useBoundStore } from '../../store/index'
import { Animal, CustomAnimalData , Weapon} from '@/types/animal';

interface StepProps {
  next: () => void;
  back: () => void;
}

 // Define a default animal
 const defaultAnimal: Animal = {
  name: "Select Your Animal",
  image: "placeholder.png",
  description: "Select Your Animal",
  alias: "placeholder",
};



const Step3: React.FC<StepProps> = ({ next, back }) => {
  const { weapons, selectedAnimal, resetSelectedAnimal, setSelectedAnimalImage, setSelectedAnimalWeapon } = useBoundStore();
  const [displayAnimal, setDisplayAnimal] = useState<Animal>(selectedAnimal?.animal ?? defaultAnimal);

  const setSelectedWeapon = (weapon: Weapon) => {
    setSelectedAnimalImage(`/weapons/${selectedAnimal?.animal.alias}_${weapon.alias}.png`);
    setSelectedAnimalWeapon(weapon);
  }
  const resetDisplayAnimal = () => {
    console.log(selectedAnimal?.animal.image);
    setSelectedAnimalImage(selectedAnimal?.animal.image ?? "placeholder.png");
  }
 

  useEffect(() => {
    if (selectedAnimal?.customData) {
      setDisplayAnimal({
        name: selectedAnimal.customData.name,
        description: selectedAnimal.customData.description,
        image: selectedAnimal.customData.image ?? selectedAnimal.animal.image,
        alias: selectedAnimal.animal.alias,
        properties: selectedAnimal.animal.properties,
      });
    }
  }, [selectedAnimal]);
  
  return (
  <Container fluid className="text-center text-light py-5" style={{ minWidth: '70vw' }}>
      <Row className="mb-5">
        <Col>
          <h1 className="display-4">Choose your Weapon</h1>
          <p>Choose wisely, their lifes depend on it .</p>
          <div className="d-flex justify-content-center">
          <Button variant="warning" onClick={() => back()} className="rounded-pill px-4 py-2 mx-2">Back</Button>
          <Button variant="light" onClick={() => resetDisplayAnimal()} className="rounded-pill px-4 py-2 mx-2">RESET</Button>
          <Button variant="success" className="rounded-pill px-4 py-2 mr-2" onClick={() => next()}>Save and Continue</Button>
        </div>
        </Col>
      </Row>
      <Row className="justify-content-center mb-5">
        <Col md={6} className="pr-md-5"> 
          <SelectedAnimalCard 
            selectedAnimal={displayAnimal} 
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
                  onClick={() => setSelectedWeapon(weapon) }
                  selected={selectedAnimal?.weapon?.name === weapon.name} 
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
