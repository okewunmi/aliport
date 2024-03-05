import React from 'react';
import { Wrapper } from './styles';

import Link from 'next/link';
// import { useTheme } from '../../app/ThemeContext';
const Sidebar = ({ isOpen, onClose }) => {
  // const {darkMode} = useTheme();
  return (
    <Wrapper >
    <div className={`sidebar ${isOpen ? 'show' : 'hide'}`}>
      {/* <button className="close-btn" onClick={onClose}>
        Close
      </button> */}
      <div className='NavBar__link' >
        <Link className='links' href="/">Home</Link>
                <Link className='links' href="/contact">Contact Me</Link>
                <Link className='links' href="/project">Projects</Link>
                <Link className='links' href="/process">Process</Link>
                <Link className='links' href="/about">About Me</Link> 
            </div>
    </div>
    </Wrapper>
  );
};

export default Sidebar;



