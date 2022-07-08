import React from 'react';
import './Card.css';

export interface CardProps {
    content: string;
    email?: string;
}

function Card(props: CardProps) {
    return (
        <div className="card">
        <div>My name is {props.content}</div>
        <div className="email">E-mail: <a href={`mailto: ${props.email}`}>{props.email}</a></div>
       

        </div>
    )
}

export default Card;