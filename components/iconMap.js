import { DiMsqlServer } from 'react-icons/di'
import {
  FaAws, FaBrain, FaCode, FaDatabase, FaFilePdf, FaJava, FaLinkedin, FaPlug, FaRobot, FaVial,
} from 'react-icons/fa'
import {
  SiApachemaven, SiBootstrap, SiCplusplus, SiDocker, SiExpress, SiGit, SiGithub, SiHibernate, SiHtml5, SiInstagram,
  SiJavascript, SiJest, SiJunit5, SiKubernetes, SiMongodb, SiMui, SiNextdotjs, SiNodedotjs,
  SiOpenapiinitiative, SiPostgresql, SiPython, SiReact, SiRedux, SiSass, SiSonatype, SiSpringboot, SiTypescript,
  SiYoutube,
} from 'react-icons/si'
import { TbBrandCSharp, TbBrandCss3, TbSql } from 'react-icons/tb'

export const FALLBACK_ICON = FaCode

const ICONS = {
  java: FaJava,
  csharp: TbBrandCSharp,
  javascript: SiJavascript,
  typescript: SiTypescript,
  python: SiPython,
  sql: TbSql,
  cplusplus: SiCplusplus,
  springboot: SiSpringboot,
  hibernate: SiHibernate,
  mybatis: FaDatabase,
  nodejs: SiNodedotjs,
  express: SiExpress,
  rest: FaPlug,
  openapi: SiOpenapiinitiative,
  react: SiReact,
  nextjs: SiNextdotjs,
  redux: SiRedux,
  responsive: TbBrandCss3,
  postgresql: SiPostgresql,
  sqlserver: DiMsqlServer,
  maven: SiApachemaven,
  git: SiGit,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  aws: FaAws,
  nexus: SiSonatype,
  pdfbox: FaFilePdf,
  mongodb: SiMongodb,
  junit: SiJunit5,
  jest: SiJest,
  tdd: FaVial,
  'ai-agents': FaRobot,
  mcp: FaPlug,
  'model-training': FaBrain,
  html: SiHtml5,
  css: TbBrandCss3,
  bootstrap: SiBootstrap,
  sass: SiSass,
  mui: SiMui,
  github: SiGithub,
  linkedin: FaLinkedin,
  youtube: SiYoutube,
  instagram: SiInstagram,
}

export const KNOWN_ICON_KEYS = Object.keys(ICONS)

export function iconFor(iconKey) {
  return ICONS[iconKey] ?? FALLBACK_ICON
}
