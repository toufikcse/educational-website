import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import img1 from '../../images/pic-1.jpg';
import img2 from '../../images/pic-2.jpg';
import img3 from '../../images/pic-3.jpg';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Carousel >
                <Carousel.Item>
                    <img
                    className="d-block text-center w-100"
                    src={img1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block text-center w-100"
                    src={img2}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block text-center w-100"
                    src={img3}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div>
                <hr />
                <h2>Services</h2>
                <hr />
                <div className='home-service'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://image.freepik.com/free-photo/website-development-links-seo-webinar-cyberspace-concept_53876-120953.jpg?w=740" />
                        <Card.Body>
                            <Card.Title>Web Development</Card.Title>
                            <p>Price: $520</p>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://image.freepik.com/free-vector/elegant-musical-notes-music-chord-background_1017-20759.jpg?w=740" />
                        <Card.Body>
                            <Card.Title>Music</Card.Title>
                            <p>Price: $520</p>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://image.freepik.com/free-vector/artistic-background-with-palette-paints_1284-10291.jpg?w=740" />
                        <Card.Body>
                            <Card.Title>Drawing</Card.Title>
                            <p>Price: $520</p>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://image.freepik.com/free-photo/young-handsome-man-driving-his-new-car-holding-out-keys_231208-889.jpg?w=740" />
                        <Card.Body>
                            <Card.Title>Driving</Card.Title>
                            <p>Price: $520</p>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Home;