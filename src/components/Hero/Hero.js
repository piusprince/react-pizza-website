import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import { HeroContainer, HeroContents, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements'

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
       <HeroContainer>
           <Navbar handleToggle={handleToggle} />
           <Sidebar isOpen={isOpen} handleToggle={handleToggle} />
           <HeroContents>
               <HeroItems>
                   <HeroH1>Greatest Pizza ever</HeroH1>
                   <HeroP>Ready in 60 seconds</HeroP>
                   <HeroBtn>Place your order</HeroBtn>
               </HeroItems>
           </HeroContents>
       </HeroContainer>
    )
}

export default Hero
