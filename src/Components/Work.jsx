/**
 * @copyright 2024 Abhimanyu
 * @license Apache-2.0
*/

import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/project-1.jpg',
      title: 'Blind Vision',
      tags: ['API', 'MVC', 'Development'],
      projectLink: 'https://github.com/abhimanyu-1/Blind-Vision.git'
    },
    {
      imgSrc: '/images/project-2.jpg',
      title: 'Driver Monitoring System',
      tags: ['API', 'SPA'],
      projectLink: 'https://github.com/abhimanyu-1/DMS.git'
    },
    {
      imgSrc: '/images/project-3.jpg',
      title: 'Low Light image enhancement',
      tags: ['Development', 'API'],
      projectLink: 'https://github.com/abhimanyu-1/Low-Light-Image-Enhancement.git'
    },
    {
      imgSrc: '/images/project-4.jpg',
      title: 'Online KSRTC booking',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/abhimanyu-1/Online-voting-system__Project.git'
    },
    {
      imgSrc: '/images/project-5.jpg',
      title: 'Cat & Dogs',
      tags: ['eCommerce', 'Development'],
      projectLink: 'https://github.com/abhimanyu-1/React.git'
    },
    {
      imgSrc: '/images/project-6.jpg',
      title: 'Ainsurtech',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/abhimanyu-1/Internship.git'
    },
  ];

const Work = () => {
  return (
    <section className="section" id="work">
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
            My portfolio highlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {
                works.map(({imgSrc , title , tags , projectLink},key)=>
                (
                    <ProjectCard 
                    key={key}
                    imgSrc={imgSrc}
                    title={title}
                    tags={tags}
                    projectLink={projectLink}/>
                ))
                }
            </div>
        </div>
    </section>
  )
}

export default Work
