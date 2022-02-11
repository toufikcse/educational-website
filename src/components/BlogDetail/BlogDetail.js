import React from 'react';
import { Card } from 'react-bootstrap';

const BlogDetail = (props) => {
    // console.log(props);
    const {name, image, details} = props.blog;
    
    return (
        <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                {details}
            </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default BlogDetail;