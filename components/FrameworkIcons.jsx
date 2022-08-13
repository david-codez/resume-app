import React, { useState, useEffect} from 'react'
import  { TiHtml5 }  from "react-icons/ti"
import { TbBrandCss3, TbBrandNextjs } from 'react-icons/tb'
import { RiReactjsFill } from 'react-icons/ri'
import { FaNodeJs } from 'react-icons/fa'
import { 
    SiRedux, 
    SiPython, 
    SiExpress, 
    SiBootstrap, 
    SiJavascript, 
    SiMongodb,
    SiCsharp,
    SiCplusplus,
    SiMaterialui,
    SiGit,
} from 'react-icons/si'
import { Row, Col } from 'react-bootstrap'
import { Tooltip } from '@mui/material'






export default function FrameworkIcons() {
    const iconSize = '6rem'
    return (
        <>
        <Row>
            <Col>
                <Tooltip title={<h6>HTML5</h6>} placement='top' arrow>
                    <TiHtml5 id='html-icon' className='framework-icon' size={iconSize} />
                </Tooltip>
            </Col>
            <Col>
                <Tooltip title={<h6>CSS</h6>} placement='top' arrow>
                    <TbBrandCss3 id='css-icon' className='framework-icon' size ={iconSize} />
                </Tooltip>
            </Col>
            <Col>
                <Tooltip title={<h6>Bootstrap</h6>} placement='top' arrow>
                    <SiBootstrap id='bootstrap-icon' className='framework-icon' size={iconSize} />
                </Tooltip>
            </Col>
            <Col>
                <Tooltip title={<h6>JavaScript</h6>} placement='top' arrow>
                    <SiJavascript id='js-icon' className='framework-icon' size={iconSize} />

                </Tooltip>
            </Col>
            <Col>
                <Tooltip title={<h6>React</h6>} placement='top' arrow>
                    <RiReactjsFill id='react-icon' className='framework-icon' size={iconSize} />
                </Tooltip>
            </Col>
            <Col>
                <Tooltip title={<h6>Redux</h6>} placement='top' arrow>
                    <SiRedux id='redux-icon' className='framework-icon' size={iconSize} />
                </Tooltip>
            </Col>   
            <Col>
                <Tooltip title={<h6>Node</h6>} placement='top' arrow>
                    <FaNodeJs id='node-icon' className='framework-icon' size={iconSize} />
                </Tooltip>
            </Col>
            <Col>
                <Tooltip title={<h6>Next JS</h6>} placement='top' arrow>
                   <TbBrandNextjs id='nextjs-icon' className='framework-icon' size={iconSize} />
                </Tooltip>
            </Col>
            <Col>
                <Tooltip title={<h6>Git</h6>} placement='top' arrow>
                    <SiGit id='git-icon' className='framework-icon' size={iconSize} />
                </Tooltip>
            </Col>
            <Col>
                <Tooltip title={<h6>Python</h6>} placement='top' arrow>
                  <SiPython id='python-icon' className='framework-icon' size={iconSize} />
                </Tooltip>
            </Col>
            <Col>
                <Tooltip title={<h6>Express JS</h6>} placement='top' arrow>
                  <SiExpress id='express-icon' className='framework-icon' size={iconSize} />

                </Tooltip>
            </Col>
            <Col>
                <Tooltip title={<h6>MongoDB</h6>} placement='top' arrow>
                    <SiMongodb id='mongodb-icon' className='framework-icon' size={iconSize} />
                </Tooltip>
            </Col>
            <Col>
                <Tooltip title={<h6>C Sharp</h6>} placement='top' arrow>
                    <SiCsharp id='csharp-icon' className='framework-icon' size={iconSize} />
                </Tooltip>
            </Col>
            <Col>
                <Tooltip title={<h6>C++</h6>} placement='top' arrow>
                   <SiCplusplus id='cplusplus-icon' className='framework-icon' size={iconSize} />
                </Tooltip>
            </Col>
            <Col>
                <Tooltip title={<h6>Material UI</h6>} placement='top' arrow>
                    <SiMaterialui id='mui-icon' className='framework-icon' size={iconSize} />
                </Tooltip>
            </Col>
        </Row>
        </>
    )
}