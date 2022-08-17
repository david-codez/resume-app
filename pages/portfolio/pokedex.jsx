import React from 'react'
import pokedexImage from '../../public/images/pokedex-screenshot.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Row } from 'react-bootstrap'
import  { TiHtml5 }  from "react-icons/ti"
import { TbBrandCss3, TbBrandNextjs } from 'react-icons/tb'
import { RiReactjsFill } from 'react-icons/ri'
import { 
    SiBootstrap,
    SiJavascript,
    SiSass
} from 'react-icons/si'

export default function Pokedex() {
  const pokedexUrl = 'https://pokedex-mu-nine-85.vercel.app'
  const iconSize = '4rem'


    return (
        <div>
        <h1 className='page-header'>Pokedex</h1>
        <Image src={pokedexImage} alt='To Do List' height='300' width='500' />
        <Link href={pokedexUrl}><a><h2>Click Here For Project</h2></a></Link>
        <hr />

        <Row>
            <Col sm={6}>
                <h3>Technologies Used</h3>
                <TiHtml5 id='html-icon' className='framework-icon' size={iconSize} />
                <TbBrandCss3 id='css-icon' className='framework-icon' size ={iconSize} />
                <SiBootstrap id='bootstrap-icon' className='framework-icon' size={iconSize} />
                <SiJavascript id='js-icon' className='framework-icon' size={iconSize} />
                <RiReactjsFill id='react-icon' className='framework-icon' size={iconSize} />
                <SiSass id='sass-icon' className='framework-icon' size={iconSize} />





            </Col>
            <Col sm={6}>
                <h3>Description</h3>

            </Col>
        </Row>
        
        </div>
    )

}