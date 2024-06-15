import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Form, InputGroup, Form as BootstrapForm } from 'react-bootstrap';
import SelectedAnimalCard from './SelectedAnimalCard'; 
import AnimalCard from './AnimalCard'; 
import styles from './Step.module.css';
import { useBoundStore } from '../../store/index'
import { Animal } from '../../types/animal';

interface StepProps {
  next: () => void;
  back: () => void;
}



const Step2: React.FC<StepProps> = ({ next, back }) => {
  const { selectedAnimal, resetSelectedAnimal, setSelectedAnimalCustomData } = useBoundStore();


  // Define a default animal
  const defaultAnimal: Animal = {
    name: "Select Your Animal",
    image: "placeholder.png",
    alias: "placeholder",
    description: "Select Your Animal"
  };
  const [name, setName] = useState(selectedAnimal?.customData?.name ?? '');
  const [description, setDescription] = useState(selectedAnimal?.customData?.description ?? '');

  const save = () => {
    setSelectedAnimalCustomData(name, description);
    next();
  }

  
  
  return (
  <Container fluid className="text-center text-light py-5" style={{ minWidth: '70vw' }}>
      <Row className="mb-5">
        <Col>
          <h1 className="display-4">Name your animal</h1>
          <p>Choose wisely, their lifes depend on it .</p>
          <div className="d-flex justify-content-center">
          <Button variant="warning" onClick={() => back()} className="rounded-pill px-4 py-2 mx-2">Back</Button>
          <Button variant="light" onClick={() => resetSelectedAnimal()} className="rounded-pill px-4 py-2 mx-2">RESET</Button>
          <Button variant="success" className="rounded-pill px-4 py-2 mr-2" onClick={() => save()}>Save and Continue</Button>
        </div>
        </Col>
      </Row>
      <Row className="justify-content-center mb-5">
        <Col md={5} className="pr-md-5"> 
          <SelectedAnimalCard 
            selectedAnimal={selectedAnimal?.animal ?? defaultAnimal} 
            showInfo={false}
          />
        </Col>
        <Col md={7}>
          <Card className="bg-dark text-white">
            <Card.Body>
              <Form>
                <Form.Group className="mb-3 row">
                  <Form.Label htmlFor="animalName" className="col-sm-2 col-form-label">Name</Form.Label>
                  <div className="col-sm-10">
                    <InputGroup>
                      <Form.Control 
                      type="text" 
                      id="animalName" 
                      placeholder="Enter animal name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      />
                    </InputGroup>
                  </div>
                </Form.Group>
                <Form.Group className="mb-3 row">
                  <Form.Label htmlFor="animalDescription" className="col-sm-2 col-form-label">Description</Form.Label>
                  <div className="col-sm-10">
                    <InputGroup>
                      <Form.Control 
                        as="textarea" 
                        id="animalDescription" 
                        rows={3} 
                        placeholder="Enter description" 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        />
                    </InputGroup>
                  </div>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Step2;
