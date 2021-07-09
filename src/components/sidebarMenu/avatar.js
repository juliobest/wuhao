import React from 'react';
import { PERSONE } from '../../mockData/mockData';
export default function Avatar() {
  return (
    <>
      <div className='image'>
        <div>
          <img src='assets/images/author-image.jpg' alt='' />
        </div>
      </div>
      <div className='author-content'>
        <h4>{PERSONE.name}</h4>
        <span>{PERSONE.position}</span>
      </div>
    </>
  );
}
