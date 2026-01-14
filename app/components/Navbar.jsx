import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef } from 'react'

import '../globals.css'
//import github from '../../assets/github.png'

import { usePageContext } from '../context/PageContext'

const Navbar = () => {
    const [{ page }, dispatch] = usePageContext()
    
    const goHome = () => {
        if(page == "main") {
            scrollToSection("intro")
        } else {
            goToMain()
        }
    }

    const goToProjects = () => {
        if(page == "main") {
            scrollToSection("projects")
        } else {
            goToMain()
        }
    }

    const goToMain = () => {
        dispatch({
            type: "SET_PROJECT",
            project: ""
        })
        dispatch({
            type: "SET_PAGE",
            page: "main",
        })
    }

    const goToResume = () => {
        dispatch({
            type: "SET_PROJECT",
            project: ""
        })
        dispatch({
            type: "SET_PAGE",
            page: "resume",
        })
    }

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId)
        if(section) {
        section.scrollIntoView({ behavior: 'smooth'})
        }
    }

    return (
        <nav>
            <ul className='nav-options'>
                <li className='nav-option' onClick={() => goHome()}>Home</li>
                <li className='nav-option' onClick={() => goToProjects()}>My Projects</li>
                <li className='nav-option' onClick={() => goToResume()}>Resume</li>
                <li className='nav-option'><a href="https://github.com/stewartchicken" target='_blank'><Image className='nav-image-git' src={assets.github_light} alt='Github'/></a></li>
                <li className='nav-option'><a href="https://www.linkedin.com/in/evan-poon-a44761259/" target='_blank'><Image className='nav-image-ln' src={assets.linkedin} alt='Linkedin'/></a></li>
            </ul>
        </nav>
    ) 
}

export default Navbar