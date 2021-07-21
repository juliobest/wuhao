import React from 'react';
import Portfolio from '../components/portfolio/portfolio';
import Testimonials from '../components/testimonials/testimonials';
import SidebarMenu from '../components/sidebarMenu/sidebarMenu';
import AboutMe from '../components/aboutMe/aboutMe';
import MySkills from '../components/mySkills/mySkills';
import PortfolioSingleProject from '../components/singleProject/portfolioSingleProject';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function Home() {
  return (
    <Router>
      <div id='page-wraper'>
        <SidebarMenu />
        <Route path='/' exact component={AboutMe} />

        <Route path='/testimonials' component={Testimonials} />
        <Route path='/skills' component={MySkills} />

        <Route path='/portfolio' exact component={Portfolio} />

        <Route
          path='/portfolio/:id'
          render={({ match }) => {
            const { id } = match.params;
            return <PortfolioSingleProject projectId={id} />;
          }}
        />
      </div>
    </Router>
  );
}
