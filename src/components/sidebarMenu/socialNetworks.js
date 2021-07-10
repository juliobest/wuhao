import React from 'react';
import { SOCIAL_NETWORKS } from '../../mockData/socialNetworks';

export default function SocialNetworks() {
  return (
    <div className='social-network'>
      <ul className='soial-icons'>
        {SOCIAL_NETWORKS.map((item) => (
          <li key={item.id}>
            <a target='_blank' href={item.link} rel='noreferrer'>
              <i className={item.icon}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
