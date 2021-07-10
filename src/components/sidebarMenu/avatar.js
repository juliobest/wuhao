import React from 'react';
import { PERSON } from '../../mockData/person';

export default function Avatar() {
  return (
    <>
      <div className='image'>
        <div>
          <img src='/assets/images/author-image.jpg' alt='' />
        </div>
      </div>
      <div className='author-content'>
        <h4>{PERSON.name}</h4>
        <span>{PERSON.position}</span>
      </div>
    </>
  );
}
