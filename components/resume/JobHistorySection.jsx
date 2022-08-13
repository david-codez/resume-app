import React from 'react'
import jobHistory from '../../workHistory.json'
import JobAccordion from './JobAccordion'




export default function JobHistorySection() {

    const jobs = jobHistory.reverse()

  return (
    <div>
    
     {
        jobs.map((job) => (
         <div key={job.id}>
          <JobAccordion job={job} />
         </div>
        ))
     }
    </div>
    

  )
}

