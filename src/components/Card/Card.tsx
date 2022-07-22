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
      <div className="card-container">
        <div className="card-header">{props.content}</div>
        <div className="card-subheader">
        { props.email ? (
            // If the e-mail address is provided, display this template:
            <div className="email">
              E-mail:&nbsp;
              <a href={`mailto: ${props.email}`}>
                {props.email}
              </a>
            </div>
          ) : (
            // If there is no e-mail address, use this other template:
            <></>
          )
        }
        </div>
        <div className="card-content">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Card;