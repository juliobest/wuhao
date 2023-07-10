import React from 'react';
import { PERSON } from '../../mockData/person';

export default function Avatar() {
  return (
    <>
      <div className='image'>
        <div>
          {/* <img src='/assets/images/my.png' alt='' /> */}
        </div>
      </div>
      <div className='author-content'>
        <h4>{PERSON.name}</h4>
        {/* <a href="/resume.pdf" target="_blank" className="text-warning"> Download Resume </a> */}
      </div>
    </>
  );
}
