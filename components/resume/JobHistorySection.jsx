import React from 'react'
import jobHistory from '../../workHistory.json'
import JobAccordion from './JobAccordion'




export default function JobHistorySection() {

    const jobs = jobHistory
  return (
    <div>
      <h1>Job History</h1>
    
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

