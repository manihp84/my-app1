import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import './Demoapi.css';
const baseURL = 'https://dummyjson.com/products';

function Apicomp() {
    const [post, setPost] = useState(null);
    const [showAll, setShowAll] = useState(false); // State to toggle showing all cards
    const [cardsToShow] = useState(6); // Initial number of cards to show
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);

    // Function to handle "Load More" button click
    const handleLoadMore = () => {
        setIsLoading(true); // Start loading
        setShowAll(true); // Show all cards
        setTimeout(() => {
            setIsLoading(false); // Stop loading after a delay
        }, 2000); // Adjust the delay as needed
    };

    if (!post) return null;

    return (
        <>
            <Container>
                <Row>
                    {isLoading ? (
                        <div className="bg-2">
                            <div className="loader-b"></div>
                        </div>
                    ) : (
                        post.products.slice(0, showAll ? post.products.length : cardsToShow).map((ele, index) => (
                            <Col md={4} key={index}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={ele.images[0]} />
                                    <Card.Body>
                                        <Card.Title>{ele.title}</Card.Title>
                                        <Card.Text>{ele.description}</Card.Text>
                                        <h5>{ele.price}</h5>
                                        <h5>{ele.stock}</h5>
                                        <h5>{ele.rating}</h5>
                                        <h5>{ele.discountPercentage}</h5>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    )}
                </Row>
            </Container>
            {!showAll && (
                <Button onClick={handleLoadMore}>Load More</Button>
            )}
        </>
    );
}

export default Apicomp;