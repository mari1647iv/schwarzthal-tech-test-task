import "./Section.css";
import React, { useState } from 'react';
import { Plus, Minus } from 'react-feather';


const Section: React.FC<{ title: string }> = (props) => {
  const { title, children } = props
  const [isActive, setIsActive] = useState(false);


  return (
    <div>
      <button className="section" onClick={() => { setIsActive(!isActive) }}>
        <h2>{title}</h2>
        <i>
          {isActive ?
            <Minus size={40} color="#746bfc" /> :
            <Plus size={40} color="#746bfc" />
          }
        </i>
      </button>
      {isActive && children}
    </div>
  );
}

export default Section;