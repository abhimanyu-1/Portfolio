/**
 * @copyright 2024 Abhimanyu
 * @license Apache-2.0
*/

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP,ScrollTrigger);


import CertificateCard from "./CertificateCard";

const reviews = [
  {
    content: 'Volunteer certificate for GSFK (Science Volunteer). This experience enhanced my problem-solving and leadership skills while contributing to science initiatives.',
    name: 'Abhimanyu',
    imgSrc: '/images/certificate-5.jpg',
    company: 'GSFK'
  },
  {
    content: 'Internship certificate for HTML, CSS, JS, and .NET. Gained hands-on experience in front-end and back-end development during this internship.',
    name: 'Abhimanyu',
    imgSrc: '/images/certificate-3.jpg',
    company: 'Internship'
  },
  {
    content: 'HackerRank certificate for "Python Basics". Demonstrated proficiency in Python programming through competitive coding challenges.',
    name: 'Abhimanyu',
    imgSrc: '/images/certificate-2.jpg',
    company: 'HackerRank'
  },
  {
    content: 'NPTEL Online Certificate for the course "Cloud Computing". Acquired knowledge of cloud technologies and architectures, enabling efficient cloud-based solutions.',
    name: 'Abhimanyu',
    imgSrc: '/images/certificate-1.jpg',
    company: 'NPTEL'
  },
  {
    content: 'NPTEL Online Certificate for the course "The Joy of Computing using Python". This course helped strengthen my Python skills and sparked my interest in algorithmic problem-solving.',
    name: 'Abhimanyu',
    imgSrc: '/images/certificate-1.jpg',
    company: 'NPTEL'
  }
];


const Certificates = () => {

  useGSAP(()=>{
    gsap.to('.scrub-slide',{
      scrollTrigger:{
        trigger:'.scrub-slide',
        start:'-200% 80%',
        end:'400% 80%',
        scrub:true
      },
      x:'-1000'
    })
  })

  return (
    <section 
    className="section overflow-hidden"
    id="reviews">
      <div className="container">
        <h2 className="headline-2 mb-8">
        My Certificates
        </h2>

        <div className="scrub-slide flex items-stretch gap-3 w-fit snap">
          {
            reviews.map(({content, name, imgSrc , company},key)=>(
              <CertificateCard
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={content}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Certificates
