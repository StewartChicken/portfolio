
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

import { usePageContext } from '../context/PageContext'

const Intro = () => {
  const [{ page }, dispatch] = usePageContext()

  const goToResume = () => {
        dispatch({
            type: "SET_PAGE",
            page: "resume",
            project: ""
        })
    }

  return (
      <div id='intro' className='intro'>
        <div>
          <Image src={assets.profile_img} alt='' className='intro-profile-image'/>
        </div>

        <h3>
          Hello, I'm Evan Poon!
          <Image src={assets.hand_icon} alt='' className='hand-image'/>
        </h3>

        <h1>
          Electrial & Computer Engineering<br/>
          Applied Mathematics
        </h1>
        <p className=''>
          I'm an electrical and computer engineering student with a strong focus on embedded systems, firmware 
          development, and low-level software design. My work centers on building reliable, hardware-adjacent 
          systems—microcontrollers, real-time operating systems, device communication, and performance-constrained 
          environments—while maintaining clean abstractions and maintainable code. Alongside engineering, I have 
          a deep interest in applied mathematics and theoretical foundations, which shapes how I approach system 
          design, debugging, and optimization through careful modeling, abstraction, and first-principles reasoning.
        </p>

        <div className='intro-buttons'>
          <div onClick={() => goToResume()} className='resume-button'>
            My Resume
            <Image src={assets.right_arrow_white} alt='' className='button-arrow'/>
          </div>

        {/* 
          <div className='contact-button'>
            Contact Me
            <Image src={assets.right_arrow_white} alt='' className='button-arrow'/>
          </div>
        */}
        </div>
    </div>
  )
}

export default Intro