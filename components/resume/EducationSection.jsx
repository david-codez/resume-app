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
                            {educationHistory[0].school}
                        </Card.Title>
                        <Card.Subtitle>
                            {educationHistory[0].diploma}
                        </Card.Subtitle>
                        <Card.Text>
                            {educationHistory[0].startMonth + " " + educationHistory[0].startYear + " - " + educationHistory[0].endMonth + " " + educationHistory[0].endYear}
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
                            {educationHistory[1].school}
                        </Card.Title>
                        <Card.Subtitle>
                            {educationHistory[1].diploma}
                        </Card.Subtitle>
                        <Card.Text >
                            {educationHistory[1].startMonth + " " + educationHistory[1].startYear + " - " + educationHistory[1].endMonth + " " + educationHistory[1].endYear}
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
                            {educationHistory[2].school}
                        </Card.Title>
                        <Card.Subtitle >
                            {educationHistory[2].diploma }
                        </Card.Subtitle>
                        <Card.Subtitle >
                            {educationHistory[2].major}
                        </Card.Subtitle>
                        <Card.Text >
                            {educationHistory[2].startMonth + " " + educationHistory[2].startYear + " - " + educationHistory[2].endMonth + " " + educationHistory[2].endYear}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </>
  )
}

