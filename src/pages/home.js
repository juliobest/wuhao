import React from 'react';
import Portfolio from '../components/portfolio/portfolio';
import Testimonials from '../components/testimonials/testimonials';
import SidebarMenu from '../components/sidebarMenu/sidebarMenu';

export default function Home() {
  return (
    <div id='page-wraper'>
      <SidebarMenu />
      <Portfolio />
      <Testimonials />
    </div>
  );
}
