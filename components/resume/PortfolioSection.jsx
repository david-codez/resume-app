import React from 'react'
import { Col, Row, Container, Card } from 'react-bootstrap'
import Link from 'next/link'

export default function PortfolioSection() {
    const todoListUrl = 'https://to-do-list-app-mu.vercel.app/'
    const pokedexUrl = 'https://pokedex-mu-nine-85.vercel.app'
    const hangmanUrl = 'https://hangman-woad.vercel.app'

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Link href='/portfolio/to-do-list'>
                            <Card border='white' bg ='black'>
                                <Card.Img variant='top' src='/images/to-do-list-screenshot.png' alt='to do list' height='200' />
                                <Card.Body>
                                    <Card.Title>To Do List</Card.Title>
                                    {/* <Card.Text>
                                        To Do List App
                                    </Card.Text> */}
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col>
                        <Link href='/portfolio/pokedex'>
                                <Card border='white' bg ='black'>
                                    <Card.Img variant='top' src='/images/pokedex-screenshot.png' alt='pokedex' height='200'/>
                                    <Card.Body>
                                        <Card.Title>Pokedex</Card.Title>
                                        {/* <Card.Text>
                                            To Do List App
                                        </Card.Text> */}
                                    </Card.Body>
                                </Card>
                            </Link>
                    </Col>
                    <Col>
                        <Link href='/portfolio/hangman'>
                            <Card border='white' bg ='black'>
                                <Card.Img variant='top' src='/images/hangman-screenshot.png' alt='hangman' height='200'/>
                                <Card.Body>
                                    <Card.Title>Hangman</Card.Title>
                                 
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
}