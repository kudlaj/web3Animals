import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import SelectedAnimalCard from '@/components/cards/SelectedAnimalCard';
import { useBoundStore } from '@/store/index'
import { Animal, CustomAnimalData , Weapon} from '@/types/animal';

const defaultAnimal: Animal = {
  name: "Select Your Animal",
  image: "placeholder.png",
  description: "Select Your Animal",
  alias: "placeholder",
};

const Fight = () => {
  const { animals, selectedAnimal, setSelectedAnimal, resetSelectedAnimal } = useBoundStore();
  const [displayAnimal, setDisplayAnimal] = useState<Animal>(selectedAnimal?.animal ?? defaultAnimal);
  
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
      <Row className="justify-content-center mb-5">
        <Col md={12} className="pr-md-5 d-flex justify-content-center">
          <SelectedAnimalCard
            selectedAnimal={displayAnimal}
          />
        </Col>

      </Row>
    </Container>
  )
}

export default Fight;