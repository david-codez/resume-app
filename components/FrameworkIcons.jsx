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
    SiMui,
    SiGit,
    SiSass
} from 'react-icons/si'
import { Row, Col } from 'react-bootstrap'
import { Tooltip } from '@mui/material'






export default function FrameworkIcons() {
    const iconSize = '6rem'
    return (
        <div>
            <Row>
                <Col>
                    <Tooltip title='HTML5' placement='top' arrow>
                        <div>

                        <TiHtml5    id='html-icon' className='framework-icon' size={iconSize} />
                        </div>
                    </Tooltip>
                </Col>
                <Col>
                    <Tooltip title='CSS' placement='top' arrow>
                        <div>

                        <TbBrandCss3 id='css-icon' className='framework-icon' size ={iconSize} />
                        </div>
                    </Tooltip>
                </Col>
                <Col>
                    <Tooltip title='Bootstrap' placement='top' arrow>
                        <div>

                        <SiBootstrap id='bootstrap-icon' className='framework-icon' size={iconSize} />
                        </div>
                    </Tooltip>
                </Col>
                <Col>
                    <Tooltip title='JavaScript' placement='top' arrow>
                        <div>

                        <SiJavascript id='js-icon' className='framework-icon' size={iconSize} />
                        </div>

                    </Tooltip>
                </Col>
                <Col>
                    <Tooltip title='React' placement='top' arrow>
                        <div>

                        <RiReactjsFill id='react-icon' className='framework-icon' size={iconSize} />
                        </div>
                    </Tooltip>
                </Col>
                <Col>
                    <Tooltip title='Redux' placement='top' arrow>
                        <div>

                        <SiRedux id='redux-icon' className='framework-icon' size={iconSize} />
                        </div>
                    </Tooltip>
                </Col>   
                <Col>
                    <Tooltip title='Node' placement='top' arrow>
                        <div>

                        <FaNodeJs id='node-icon' className='framework-icon' size={iconSize} />
                        </div>
                    </Tooltip>
                </Col>
                <Col>
                    <Tooltip title='Next JS' placement='top' arrow>
                        <div>

                    <TbBrandNextjs id='nextjs-icon' className='framework-icon' size={iconSize} />
                        </div>
                    </Tooltip>
                </Col>
                <Col>
                    <Tooltip title='Git' placement='top' arrow>
                        <div>

                        <SiGit id='git-icon' className='framework-icon' size={iconSize} />
                        </div>
                    </Tooltip>
                </Col>
                <Col>
                    <Tooltip title='Python' placement='top' arrow>
                        <div>

                    <SiPython id='python-icon' className='framework-icon' size={iconSize} />
                        </div>
                    </Tooltip>
                </Col>
                <Col>
                    <Tooltip title='Express JS' placement='top' arrow>
                        <div>

                    <SiExpress id='express-icon' className='framework-icon' size={iconSize} />
                        </div>
                    </Tooltip>
                </Col>
                <Col>
                    <Tooltip title='MongoDB' placement='top' arrow>
                        <div>

                        <SiMongodb id='mongodb-icon' className='framework-icon' size={iconSize} />
                        </div>
                    </Tooltip>
                </Col>
                <Col>
                    <Tooltip title='C Sharp' placement='top' arrow>
                        <div>

                        <SiCsharp id='csharp-icon' className='framework-icon' size={iconSize} />
                        </div>
                    </Tooltip>
                </Col>
                <Col>
                    <Tooltip title='C++' placement='top' arrow>
                        <div>

                    <SiCplusplus id='cplusplus-icon' className='framework-icon' size={iconSize} />
                        </div>
                    </Tooltip>
                </Col>
                <Col>
                    <Tooltip title='Material UI' placement='top' arrow>
                        <div>

                        <SiMui id='mui-icon' className='framework-icon' size={iconSize} />
                        </div>
                    </Tooltip>
                </Col>                
                <Col>
                    <Tooltip title='Sass' placement='top' arrow>
                        <div>
                        <SiSass id='sass-icon' className='framework-icon' size={iconSize} />
                        </div>
                    </Tooltip>
                </Col>
            </Row>
        </div>
    )
}