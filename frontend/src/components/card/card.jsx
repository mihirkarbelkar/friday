import React from 'react'
import {Card} from 'react-bootstrap'
import './card.scss';
const CustomCard = (props) => {
    return <Card variant='inv-card' className={props?.className || ''}>
        <Card.Header>{props.title}</Card.Header>
        <Card.Body>
            {props.children}
        </Card.Body>
    </Card>;
} 

export default CustomCard;