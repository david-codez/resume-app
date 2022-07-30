import Nav from "../components/Navbar/Navbar"
import styles from '../styles/resume.module.css'
import Carousel from '../components/resume/Carousel'
import AboutMeSection from '../components/resume/AboutMeSection'
import 'bootstrap/dist/css/bootstrap.min.css';
import jobHistory from '../workHistory.json'
import { Container } from "react-bootstrap"
import JobHistorySection from "../components/resume/JobHistorySection";
import EducationSection from "../components/resume/EducationSection";
import PortfolioSection from "../components/resume/PortfolioSection";
import Head from 'next/head'

export default function Resume () {
  return (
    <div>
  
      <body className={styles.pageBody}>
        <section className={styles.nameSection}>
          <Container>
            <h1 className={styles.titleHeader}>David A. Daniel</h1>
            <h1 className={styles.titleSubHeader}>Web Developer</h1>
          </Container>
        </section>
        <section id='carousel-section'>
          <Container>
            <Carousel />
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
              <h1 className={styles.sectionHeader}>Portfolio</h1>
              <PortfolioSection />
          </Container>
        </section>
        <section className={styles.sectionConfig}>
          <Container>
            <h1 className={styles.sectionHeader}>Job History</h1>
            <JobHistorySection jobHistory={jobHistory} />
          </Container>
        </section>
        <section className={styles.sectionConfig}>
          <h1 className={styles.sectionHeader}>Skills</h1>
        </section>
      </body>
      
      
    </div>
  )
}


