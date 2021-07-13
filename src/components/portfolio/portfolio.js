import React from 'react';
import PortfolioItem from './portfolioItem';

import { PORTFOLIO } from '../../mockData/portfolio';
import { PORTFOLIO_SECTION } from '../../mockData/sectionHeadings';

export default function Portfolio() {
  return (
    <section className='section my-work' data-section='section3'>
      <div className='container'>
        <div className='section-heading'>
          <h2>{PORTFOLIO_SECTION.title}</h2>
          <div className='line-dec'></div>
          <span>{PORTFOLIO_SECTION.description}</span>
        </div>
        <div className='row'>
          <div className='isotope-wrapper'>
            <div className='isotope-box'>
              {PORTFOLIO.map((item) => (
                <PortfolioItem
                  img={item.img}
                  title={item.title}
                  description={item.description}
                  projectTechnologies={item.projectTechnologies}
                  link={item.link}
                  id={item.id}
                  key={item.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
