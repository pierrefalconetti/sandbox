import React from 'react';
import './Card.scss';

export interface CardProps {
  children?: any;
  icons?: string;
  cardtitle?: string;
  contact?: string;
}

function Card(props: CardProps) {
  return (
    <div className="card">
      <div className="card-container">
        <div className="card-header">{props.icons}</div>
        <div className="card-header">{props.cardtitle}</div>
        <div className="card-subheader">
        { props.contact ? (
            // If the e-mail address is provided, display this template:
            <div className="contact">
              Contact:&nbsp;
              <a href={`mailto: ${props.contact}`}>
                {props.contact}
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