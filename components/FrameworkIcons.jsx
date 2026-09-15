import { Col, Row } from 'react-bootstrap'
import { FaJava, FaNodeJs } from 'react-icons/fa'
import { RiReactjsFill } from 'react-icons/ri'
import {
  SiBootstrap, SiCplusplus, SiExpress, SiGit, SiJavascript, SiMongodb, SiMui, SiPython, SiRedux, SiSass,
} from 'react-icons/si'
import { TbBrandCSharp, TbBrandCss3, TbBrandNextjs } from 'react-icons/tb'
import { TiHtml5 } from 'react-icons/ti'

const FRAMEWORKS = [
  { name: 'HTML5', Icon: TiHtml5 },
  { name: 'CSS', Icon: TbBrandCss3 },
  { name: 'Bootstrap', Icon: SiBootstrap },
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'React', Icon: RiReactjsFill },
  { name: 'Redux', Icon: SiRedux },
  { name: 'Node', Icon: FaNodeJs },
  { name: 'Next JS', Icon: TbBrandNextjs },
  { name: 'Git', Icon: SiGit },
  { name: 'Python', Icon: SiPython },
  { name: 'Express JS', Icon: SiExpress },
  { name: 'MongoDB', Icon: SiMongodb },
  { name: 'C Sharp', Icon: TbBrandCSharp },
  { name: 'C++', Icon: SiCplusplus },
  { name: 'Material UI', Icon: SiMui },
  { name: 'Java', Icon: FaJava },
  { name: 'Sass', Icon: SiSass },
]

export default function FrameworkIcons() {
  return (
    <Row>
      {FRAMEWORKS.map((framework) => (
        <Col key={framework.name} xs={4} md={2} className="text-center">
          <framework.Icon title={framework.name} className="framework-icon" size="4rem" />
        </Col>
      ))}
    </Row>
  )
}
