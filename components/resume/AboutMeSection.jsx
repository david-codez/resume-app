import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import {BsFillPersonFill} from 'react-icons/bs'
import { Col, Row } from 'react-bootstrap';


export default function AboutMeSection() {

  return (
    <div>
        <Row>
            <Col xs='2'>
                <BsFillPersonFill size="3 em" />
            </Col>
            <Col xs='4'>
                
                
            </Col>
           <Col>
                <h1>Currently studying Network Assurance</h1>
                <h1>Self Taught Programmer</h1>
           </Col>
           
        </Row>
        
    </div>
  )
}
