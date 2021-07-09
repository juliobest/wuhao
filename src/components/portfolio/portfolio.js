import React from 'react';

import PortfolioItem from './portfolioItem.js';

import { PORTFOLIO } from '../../mockData/mockData';

export default function Portfolio() {
  return (
    <section className='section my-work' data-section='section3'>
      <div className='container'>
        <div className='section-heading'>
          <h2>My Works</h2>
          <div className='line-dec'></div>
          <span>
            Aenean sollicitudin ex mauris, lobortis lobortis diam euismod sit
            amet. Duis ac elit vulputate, lobortis arcu quis, vehicula mauris.
          </span>
        </div>
        <div className='row'>
          <div className='isotope-wrapper'>
            <div className='isotope-box'>
              {PORTFOLIO.map((item) => (
                <PortfolioItem
                  img={item.img}
                  title={item.title}
                  description={item.description}
                  skills={item.skills}
                  link={item.link}
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
