'use client'

import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import css from './Step.module.css';

interface AnimalCardProps {
  name: string;
  image: string;
  onClick: () => void;
  selected: boolean;
  description: string;
}

const AnimalCard: React.FC<AnimalCardProps> = ({ name, image, onClick, selected, description }) => (
    <Card className={`${css.animalCard} bg-secondary text-light border-1 my-1 ${selected ? css.selected : ''}`}>
      <Card.Body className="d-flex flex-column align-items-center">
        <div className={`${css.animalCircle} rounded-circle mb-3`} >
          <img src={`${image}`} alt={name} width={150} height={150} onClick={onClick}  className="img-fluid rounded-circle" />
        </div>
        <Button variant="light" onClick={onClick} className="rounded-pill px-4 py-2">{name}</Button>
      </Card.Body>
    </Card>

);

export default AnimalCard;