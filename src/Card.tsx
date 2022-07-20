import React from 'react';
import './Card.scss';

export interface CardProps {
  children?: any;
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
      <div className="card-content">
        {props.children}
      </div>
    </div>
  )
}

export default Card;