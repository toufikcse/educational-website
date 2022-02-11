import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ServiceDetail = (props) => {
    const navigate = useNavigate();
    const {serviceId} = props;
    const [courseList, setCourseList] = useState([]);

    useEffect(()=> {
        fetch('/fakedata.JSON')
        .then(res => res.json())
        .then(data => setCourseList(data))
    }, [])

    const foundcourse = courseList.find(course => course.id == serviceId);

    const handleBackToServices = () => {
        navigate('/services');
    }

    return (
        <div style={{textAlign: 'center'}}>
             <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={foundcourse?.image} />
                <Card.Body>
                    <Card.Title>{foundcourse?.name}</Card.Title>
                    <Card.Text>
                    {foundcourse?.details}
                    </Card.Text>
                    <Button onClick={handleBackToServices} variant="primary">Visit Services</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceDetail;