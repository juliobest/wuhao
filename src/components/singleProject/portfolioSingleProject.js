import React, { useEffect, useState } from 'react';
import BigPortfolioItem from './bigPortfolioItem.js';

import { PORTFOLIO } from '../../mockData/portfolio';

export default function PortfolioSingleProject(props) {
  const { projectId } = props;

  const [project, setProject] = useState({});

  useEffect(() => {
    const currentProject = PORTFOLIO.find((item) => item.id === projectId);
    setProject(currentProject);
  }, [projectId]);
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
              <BigPortfolioItem project={project} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
