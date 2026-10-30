import Footer from '../components/Footer'
import SectionNav from '../components/SectionNav'
import SiteHead from '../components/SiteHead'
import { buildPersonJsonLd } from '../components/personJsonLd'
import EducationSection from '../components/resume/EducationSection'
import ExperienceSection from '../components/resume/ExperienceSection'
import HeroSection from '../components/resume/HeroSection'
import ProjectsSection from '../components/resume/ProjectsSection'
import SkillsSection from '../components/resume/SkillsSection'
import education from '../content/education.json'
import experience from '../content/experience.json'
import profile from '../content/profile.json'
import projects from '../content/projects.json'
import skills from '../content/skills.json'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export default function Home() {
  return (
    <>
      <SiteHead
        title={`${profile.name} · ${profile.title}`}
        description={profile.summary}
        path="/"
        jsonLd={buildPersonJsonLd(profile, SITE_URL)}
      />
      <SectionNav name={profile.name} />
      <main id="top">
        <HeroSection profile={profile} />
        <SkillsSection skillGroups={skills} />
        <ExperienceSection roles={experience} />
        <ProjectsSection projects={projects} />
        <EducationSection schools={education} />
      </main>
      <Footer profile={profile} />
    </>
  )
}
