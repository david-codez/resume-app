import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Image from 'next/image'
import headshot from '../../public/images/headshot.jpeg'

export default function AboutMeSection() {

  return (
    <div>
        <Row>
            <Col md='4'>
                <div>
                  <Image
                    src={headshot}
                    alt="Headshot Picture"
                    width={300}
                    height={400}
                    style={{ width: '100%', height: 'auto' }}
                    className="aboutMeImage"
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
