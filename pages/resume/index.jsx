import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import FrameworkIcons from "../../components/FrameworkIcons";
import AboutMeSection from '../../components/resume/AboutMeSection';
import Carousel from '../../components/resume/Carousel';
import EducationSection from "../../components/resume/EducationSection";
import JobHistorySection from "../../components/resume/JobHistorySection";
import PortfolioSection from "../../components/resume/PortfolioSection";
import SocialSection from "../../components/resume/SocialSection";
import styles from '../../styles/resume.module.css';
import jobHistory from '../../workHistory.json';

const Resume = () => {
  if (!styles) return null
  return (
  
      <body className={styles.pageBody}>
        <section className={styles.nameSection}>
          <Container>
            <h1 className={styles.titleHeader}>David Daniel</h1>
            <h1 className={styles.titleSubHeader}>Software Engineer</h1>
          </Container>
        </section>
        <section className={styles.sectionConfig}>
          <Container>
            <SocialSection />
          </Container>
        </section>
        <section id='carousel-section'>
          <Container>
            <Carousel />
          </Container>
        </section>
        <section className={styles.sectionConfig} >
          <h1 className={styles.sectionHeader}>Skills</h1>
          <Container>
            <FrameworkIcons />
          </Container>
        </section>
        
        <section className={styles.sectionConfig}>
          <Container>
            <AboutMeSection />
          </Container>
        </section>
        <section className={styles.sectionConfig}>
          <Container>
              <h1 className={styles.sectionHeader}>Portfolio</h1>
              <PortfolioSection />
          </Container>
        </section>
        <section>
          <Container className="education-section">
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
     
      </body>
      
      
  
  )
}

export default Resume

