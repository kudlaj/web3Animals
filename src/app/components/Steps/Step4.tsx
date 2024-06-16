import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import SelectedAnimalCard from './SelectedAnimalCard'; 
import WeaponCard from './WeaponCard'; 
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



const Step4: React.FC<StepProps> = ({ next, back }) => {
  const { weapons, selectedAnimal, resetSelectedAnimal, setSelectedAnimalImage } = useBoundStore();
  const [displayAnimal, setDisplayAnimal] = useState<Animal>(selectedAnimal?.animal ?? defaultAnimal);



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
          <h1 className="display-4">Create your deathly Fighter</h1>
          <p>Connect your walltet for this.</p>
          <div className="d-flex justify-content-center">
          <Button variant="warning" onClick={() => back()} className="rounded-pill px-4 py-2 mx-2">Back</Button>
          <Button variant="success" className="rounded-pill px-4 py-2 mr-2" onClick={() => void(0)}>Create</Button>
        </div>
        </Col>
      </Row>
      <Row className="justify-content-center mb-5">
        <Col md={12} className="pr-md-5 d-flex justify-content-center"> 
          <SelectedAnimalCard 
            selectedAnimal={displayAnimal} 
          />
        </Col>
       
      </Row>
    </Container>
  );
};
export default Step4;
