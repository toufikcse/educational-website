import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h3>This is About Page</h3>
            <Link to="/home">
                <Button variant="secondary">Go to Home</Button>
            </Link>
        </div>
    );
};

export default About;