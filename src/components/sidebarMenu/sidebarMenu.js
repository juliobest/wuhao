import React, { useState } from 'react';
import cx from 'classnames';

import { PERSON } from '../../mockData/person';
import SocialNetworks from './socialNetworks';
import Avatar from './avatar';
import Navigation from './navigation';
import HardSkills from './hardSkills';

export default function SidebarMenu() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className='responsive-nav'>
      <i
        className='fa fa-bars'
        id='menu-toggle'
        onClick={() => toggleMenu()}
      ></i>
      <div id='menu' className={cx(['menu', isOpen && 'open'])}>
        <i
          className='fa fa-times'
          id='menu-close'
          onClick={() => closeMenu()}
        ></i>
        <div className='container'>
          <Avatar />
          <Navigation />
          <HardSkills />

          <SocialNetworks />

          <div className='copyright-text'>
            <p>Copyright 2021 {PERSON.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
