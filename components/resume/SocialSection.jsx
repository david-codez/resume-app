import React from 'react'
import Link  from 'next/link'
import { Row, Col } from 'react-bootstrap'
import { SiLinkedin, SiYoutube, SiGithub } from "react-icons/si"
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
                   <Link href={socialUrls.github}><a><SiGithub id='github-icon' className='social-icons' size={iconSize} /></a></Link>
                   <Link href={socialUrls.linkedin}><a><SiLinkedin id='linkedin-icon' className='social-icons' size={iconSize}/></a></Link>
                   <Link href={socialUrls.youtube}><a><SiYoutube id='youtube-icon' className='social-icons' size={iconSize}/></a></Link>
                   <Link href={socialUrls.instagram}><a><RiInstagramFill id='instagram-icon' className='social-icons' size={iconSize}/></a></Link>
                   
                </Col>
            </Row>
        </div>
    )
}