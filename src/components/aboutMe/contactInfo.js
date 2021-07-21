import React from 'react';
import { CONTACT_INFORMATION } from '../../mockData/person';

export default function ContactInfo() {
  return (
    <div className='contactInfo-Item'>
      {CONTACT_INFORMATION.map((item) => (
        <div className='contactInfo-Item-wrap' key={item.id}>
          <div className='contactInfo-Item-imgWrap'>
            <img src={item.icon} alt={item.title} />
          </div>
          <a href={item.id===1?`mailto:${item.content}`:'#'}>
            {item.content}
          </a>
        </div>
      ))}
    </div>
  );
}
