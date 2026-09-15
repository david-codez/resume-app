import { Accordion } from 'react-bootstrap'
import JobAccordion from './JobAccordion'

export default function JobHistorySection({ jobs }) {
  const newestFirst = [...jobs].reverse()
  return (
    <Accordion>
      {newestFirst.map((job) => (
        <JobAccordion key={job.id} job={job} />
      ))}
    </Accordion>
  )
}
