/**
 * @copyright 2024 Abhimanyu
 * @license Apache-2.0
*/

import { useRef , useEffect } from "react";
import PropTypes from "prop-types";

const Navebar = ({navOpen}) => {
    const lastActiveLink = useRef();
    const activebox = useRef(); 
    const initActiveBox = () => {
        activebox.current.style.top = lastActiveLink.current.offsetTop + 'px';
        activebox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
        activebox.current.style.width = lastActiveLink.current.offsetWidth + 'px'
        activebox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
    }
    useEffect(initActiveBox,[]);
    window.addEventListener('resize',initActiveBox);
    const activeCurrentLink = (event) =>{
        lastActiveLink.current ?.classList.remove('active');
        event.target.classList.add('active');
        lastActiveLink.current = event.target;

        activebox.current.style.top = event.target.offsetTop + 'px';
        activebox.current.style.left = event.target.offsetLeft + 'px';
        activebox.current.style.width = event.target.offsetWidth + 'px'
        activebox.current.style.height = event.target.offsetHeight + 'px';

    }
    const navItems = [
        {
          label: 'Home',
          link: '#home',
          className: 'nav-link active',
          ref: lastActiveLink
        },
        {
          label: 'About',
          link: '#about',
          className: 'nav-link'
        },
        {
          label: 'Work',
          link: '#work',
          className: 'nav-link'
        },
        {
          label: 'Reviews',
          link: '#reviews',
          className: 'nav-link'
        },
        {
          label: 'Contact',
          link: '#contact',
          className: 'nav-link md:hidden'
        }
      ];
  return (
    <nav className={'navbar '+(navOpen ? 'active' : '')}>
        {
          navItems.map(({label,link,className,ref},key)=>(
            <a
            href={link}
            key={key}
            ref={ref}
            className={className}
            onClick={activeCurrentLink}
            >
            {label}
            </a>
          ))
        }
        <div className="active-box"
             ref={activebox}>
        </div>
    </nav>
  )
}
Navebar.propTypes = {
    navOpen : PropTypes.bool.isRequired
}

export default Navebar
