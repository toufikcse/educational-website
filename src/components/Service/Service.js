import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {id, name, image} = props.service;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Link to={`/services/${id}`}>
                        <Button variant="primary">Visit Detail</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;