import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { Col, Row } from 'react-bootstrap';
import {Typography} from '@mui/material'
import Image from 'next/image'
import headshot from '../../public/images/headshot.JPG'

export default function AboutMeSection() {

  return (
    <div>
        <Row>
            <Col md='4'>
                <div>
                  <Image 
                    src={headshot}
                    alt='Headshot Picture'
                    layout='responsive'
                    height={400}
                    width={300}
                    className='aboutMeImage'
                  />
                </div>
            </Col>
            <Col md='2'>
                
                
            </Col>
           <Col md='6'>
                <h6 className='about-me-description'>
                    Highly motivated IT student and self-taught programmer gainfully employed and receiving industry leading real world experience in the automotive industry. Fourteen years working in the hospitality and customer service industry has provided invaluable skills that will transfer well to any profession.
                </h6>
           </Col>
           
        </Row>
        
    </div>
  )
}
