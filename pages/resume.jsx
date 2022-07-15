import Nav from "../components/Navbar/Navbar"
import styles from '../styles/resume.module.css'
// import Carousel from '../components/resume/Carousel'
import AboutMeSection from '../components/resume/AboutMeSection'
import 'bootstrap/dist/css/bootstrap.min.css';
import jobHistory from '../workHistory.json'
import { Container } from "react-bootstrap"
import JobHistorySection from "../components/resume/JobHistorySection";
import EducationSection from "../components/resume/EducationSection";

export default function Resume () {
  return (
    <div>
      <header>
        <Nav />
        <Container>
        {/* <Carousel /> */}
        </Container>
      </header>
      <section className={styles.nameSection}>
        <Container>
          <h1 className={styles.sectionHeader}>David A. Daniel</h1>
        </Container>
      </section>
      <section className={styles.sectionConfig}>
        <Container>
          <AboutMeSection />
        </Container>
      </section>
      <section>
        <Container>
          <h1 className={styles.sectionHeader}>Education</h1>
          <EducationSection />
        </Container>
      </section>
      <section className={styles.sectionConfig}>
        <Container>
          <h1 className={styles.sectionHeader}>Job History</h1>
          <JobHistorySection jobHistory={jobHistory} />
        </Container>
      </section>
      <section className={styles.sectionConfig}>
        <Container>
            <h1 className={styles.sectionHeader}>This is my portfolio</h1>
        </Container>
      </section>
      <section className={styles.sectionConfig}>
        <h1 className={styles.sectionHeader}>Skills</h1>
      </section>
    </div>
  )
}


