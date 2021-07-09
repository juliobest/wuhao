import React, { useState } from 'react';
import cx from 'classnames';

import { PERSONE } from '../../mockData/mockData';
import SocialNetworks from './socialNetworks';
import Avatar from './avatar';
import Navigation from './navigation';

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

          <SocialNetworks />

          <div className='copyright-text'>
            <p>Copyright 2021 {PERSONE.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
