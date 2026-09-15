import React from 'react'
import Link  from 'next/link'
import { Row, Col } from 'react-bootstrap'
import { SiYoutube, SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'



export default function SocialSection() {
    let iconSize = '4rem'
    let socialUrls = {
        github: 'https://github.com/david-codez',
        linkedin: 'https://www.linkedin.com/in/david-daniel-79945522a/',
        youtube: 'https://www.youtube.com/channel/UCl3aPvjLOyJgbfmCbyhR9PA',
        instagram: 'https://www.instagram.com/davidcodez/',
    }




    return (
        <div>
            <Row>
                <Col>
                   <Link href={socialUrls.github}><SiGithub id='github-icon' className='social-icons' size={iconSize} /></Link>
                   <Link href={socialUrls.linkedin}><FaLinkedin id='linkedin-icon' className='social-icons' size={iconSize}/></Link>
                   <Link href={socialUrls.youtube}><SiYoutube id='youtube-icon' className='social-icons' size={iconSize}/></Link>
                   <Link href={socialUrls.instagram}><RiInstagramFill id='instagram-icon' className='social-icons' size={iconSize}/></Link>
                   
                </Col>
            </Row>
        </div>
    );
}