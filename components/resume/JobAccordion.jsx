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

    const dateString = job.startMonth + ", " + job.startYear + " - " + job.endMonth + " , " + job.endYear

  return (
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }} >
            {job.company + '\t'}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }} >{dateString}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Row>
                <Col>
                    <h5>Position(s):</h5>
                    <ul>
                        {job.position.map((position, index) => (
                            
                            <li key={index}>{position}</li>
                        ))}
                    </ul>
                </Col>
                <Col>
                    <h5>Job Description:</h5>
                    <Typography>
                        {job.description}
                    </Typography>
                </Col>
                <Col>
                    <h5>Notes:</h5>
                    <Typography>
                        {job.personalNotes}
                    </Typography>
                </Col>
            
            </Row>
     
        </AccordionDetails>
      </Accordion>
  )
}

