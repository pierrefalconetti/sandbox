import React from 'react';
import './Card.css';

export interface CardProps {
  content: string;
  email?: string;
}

function Card(props: CardProps) {
  return (
    <div className="card">
      My name is {props.content}
      { props.email ? (
          // Si l'adresse e-mail est fournie
          <div className="email">
            E-mail:
            <a href={`mailto: ${props.email}`}>
              {props.email}
            </a>
          </div>
        ) : (
          // S'il n'y a pas d'adresse e-mail spécifiée
          <></>
        )
      }
    </div>
  )
}

export default Card;