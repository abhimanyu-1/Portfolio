/**
 * @copyright 2024 Abhimanyu
 * @license Apache-2.0
*/

import { ReactLenis, useLenis } from 'lenis/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP,ScrollTrigger);


// Components 
import About from "./Components/About"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Skills from "./Components/Skills"
import Work from "./Components/Work"
import Certificates from "./Components/Certificates"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"

const App = () =>{
    useGSAP(()=>{
        const elements = gsap.utils.toArray('.reveal-up');
        console.log(elements)
        elements.forEach((element)=>(
            gsap.to(element,{
                scrollTrigger:{
                    trigger:element,
                    scrub:true,
                    start:'-200 bottom',
                    end:'bottom 80%'
                },
                y:0,
                opacity:1,
                duration:1,
                ease:'power2.out'
            })
        ))
    })
    return (
        <ReactLenis root>
        <Header/>
        <main>
            <Hero/>
            <About/>
            <Skills/>
            <Work/>
            <Certificates/>
            <Contact/>
            <Footer/>
        </main>
        </ReactLenis>
    )
    
}
export default App