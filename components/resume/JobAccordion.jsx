import React, {useState} from 'react'
import {Accordion, AccordionDetails, AccordionSummary, Typography} from '@mui/material'
import {ExpandMoreIcon} from '@mui/icons-material'
import {MdExpandMore} from 'react-icons/md'
import {Col, Row} from 'react-bootstrap'

export default function JobAccordion({job}) {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    const dateString =  job.startYear + " - " + job.endYear

  return (
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='job-accordion'>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
              <Typography sx={{ width: '33%', flexShrink: 0, fontSize: '1.5rem' }} >
                {job.company + '\t'}
              </Typography>  
              <Typography sx={{ color: 'text.secondary', fontSize: '1.5rem'}}  id='date-string'>{dateString}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Row>
                <Col>
                    <h5 className='accordion-header'>Position(s):</h5>
                    <ul>
                        {job.position.map((position, index) => (
                            <li key={index}><Typography sx={{ fontSize: '1.2rem'}}>{position}</Typography></li>
                        ))}
                    </ul>
                </Col>
                <Col>
                    <h5 className='accordion-header'>Job Description:</h5>
                    <Typography sx={{ fontSize: '1.2rem'}}>
                        {job.description}
                    </Typography>
                </Col>
                <Col>
                    <h5 className='accordion-header'>Notes:</h5>
                    <Typography sx={{ fontSize: '1.2rem'}}>
                        {job.personalNotes}
                    </Typography>
                </Col>
            </Row>
        </AccordionDetails>
      </Accordion>
  )
}

