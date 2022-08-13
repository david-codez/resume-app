import React from 'react'
import {Col, Row } from 'react-bootstrap'
import { CardContent, CardMedia, Typography} from '@mui/material'
import educationHistory from '../../educationHistory.json'
import { Card } from 'react-bootstrap'

// TODO refactor cards to react bootstrap
// ! bg and border attributes dont affect mui cards


export default function EducationSection() {
  return (
    <>
        <Row>
            <Col lg='4' align='center' >
                <Card className='schoolCard' border='white' bg='black' style={{ width: '18rem' }}>
                    <Card.Img
                        variant='top'
                        height="240"
                        width='150'
                        src="/images/hs_grad_photo.jpeg"
                        alt="High School Graduation Photo"
                    />
                     <Card.Body>
                        <Card.Title>
                            <span className='school-name'>{educationHistory[0].school}</span>
                        </Card.Title>
                        <Card.Subtitle>
                            <span className='school-diploma'>{educationHistory[0].diploma}</span>
                        </Card.Subtitle>
                        <Card.Text>
                            {educationHistory[0].startYear + " - " + educationHistory[0].endYear}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg='4' align='center' >
                <Card className='schoolCard' border='white' bg='black' style={{ width: '18rem' }}>
                    <Card.Img
                        height="240"
                        width='150'
                        src="/images/aa_grad_photo.jpeg"
                        alt="AA Graduation Photo"
                    />
                     <Card.Body>
                        <Card.Title>
                            <span className='school-name'>{educationHistory[1].school}</span>
                        </Card.Title>
                        <Card.Subtitle>
                           <span className='school-diploma'>{educationHistory[1].diploma}</span> 
                        </Card.Subtitle>
                        <Card.Text >
                            {educationHistory[1].startYear + " - " + educationHistory[1].endYear}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg='4' align='center' >
                <Card className='schoolCard' border='white' bg='black' style={{ width: '18rem' }}>
                    <Card.Img
                        height="240"
                        width='150'
                        src="/images/work-in-progress.jpg"
                        alt="Work In Progress"
                    />
                     <Card.Body>
                        <Card.Title >
                            <span className='school-name'>{educationHistory[2].school}</span>
                        </Card.Title>
                        <Card.Subtitle >
                            <span className='school-diploma'>{ educationHistory[2].diploma }</span>
                        </Card.Subtitle>
                        <Card.Subtitle >
                            <span className='school-major'>{educationHistory[2].major}</span>
                        </Card.Subtitle>
                        <Card.Text >
                            {educationHistory[2].startYear + " - " + educationHistory[2].endYear}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </>
  )
}

