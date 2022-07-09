import React from 'react'
import {Col, Row} from 'react-bootstrap'
import {Card, CardContent, CardMedia, Typography} from '@mui/material'
import educationHistory from '../../educationHistory.json'

export default function EducationSection() {
  return (
    <>
        <h1>Education Section</h1>
        <Row>
            <Col>
                <Card className='schoolCard'>
                    <CardMedia
                        component="img"
                        height="240"
                        image="/images/hs_grad_photo.jpeg"
                        alt="High School Graduation Photo"
                    />
                     <CardContent>
                        <Typography align='center' gutterBottom variant="h5" component="div">
                            {educationHistory[0].school}
                        </Typography>
                        <Typography align='center' variant='subtitle1' component="div">
                            {educationHistory[0].diploma}
                        </Typography>
                        <Typography align='center' variant="body2" color="text.secondary">
                            {educationHistory[0].startMonth + " " + educationHistory[0].startYear + " - " + educationHistory[0].endMonth + " " + educationHistory[0].endYear}
                        </Typography>
                    </CardContent>
                </Card>
            </Col>
            <Col>
                <Card className='schoolCard'>
                    <CardMedia
                        component="img"
                        height="240"
                        image="/images/aa_grad_photo.jpeg"
                        alt="AA Graduation Photo"
                    />
                     <CardContent>
                        <Typography align='center' gutterBottom variant="h5" component="div">
                            {educationHistory[1].school}
                        </Typography>
                        <Typography align='center' variant='subtitle1' component="div">
                            {educationHistory[1].diploma}
                        </Typography>
                        <Typography align='center' variant="body2" color="text.secondary">
                            {educationHistory[1].startMonth + " " + educationHistory[1].startYear + " - " + educationHistory[1].endMonth + " " + educationHistory[1].endYear}
                        </Typography>
                    </CardContent>
                </Card>
            </Col>
            <Col>
                <Card className='schoolCard'>
                    <CardMedia
                        component="img"
                        height="240"
                        image="/images/work-in-progress.jpg"
                        alt="Work In Progress"
                    />
                     <CardContent>
                        <Typography align='center' gutterBottom variant="h5" component="div">
                            {educationHistory[2].school}
                        </Typography>
                        <Typography align='center' variant='subtitle1' component="div">
                            {educationHistory[2].diploma + ": "}
                        </Typography>
                        <Typography align='center' variant='subtitle2' component='div'>
                            {educationHistory[2].major}
                        </Typography>
                        <Typography align='center' variant="body2" color="text.secondary">
                            {educationHistory[2].startMonth + " " + educationHistory[2].startYear + " - " + educationHistory[2].endMonth + " " + educationHistory[2].endYear}
                        </Typography>
                    </CardContent>
                </Card>
            </Col>
        </Row>
    </>
  )
}

