import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import { SKILLS } from '../../mockData/skills';

function PortfolioItem(props) {
  const { img, title, projectTechnologies, description, id, history } = props;
  const sliceDescription = (text) => text.slice(0, 120);
  const handleClick = (id) => history.push(`portfolio/${id}`);

  return (
    <div className='isotope-item'>
      <div className='projectCard'>
        <div className='projectCard-image-block'>
          <h5 className='projectCard-image-block-title'>{title}</h5>
          <img
            src={img}
            alt='projectPicture'
            className='projectCard-image-block-img'
          />
          <ul className='projectCard-image-block-skills-list-wrap'>
            {projectTechnologies.map((projectTechnologiesItem) => {
              const technologiesSection = SKILLS.find(
                (skillsItem) =>
                  skillsItem.section === projectTechnologiesItem.section,
              );
              return projectTechnologiesItem.skillsList.map(
                (singleTechnology) => {
                  const skill = technologiesSection.skillsList.find(
                    (itemIcon) => itemIcon.skill === singleTechnology,
                  );
                  return (
                    <li
                      className='projectCard-image-block-skills-list'
                      key={skill.id}
                    >
                      <img src={skill && skill.icon} alt='skill-icon' />
                    </li>
                  );
                },
              );
            })}
          </ul>
        </div>

        <div className='projectCard-content-block'>
          <h4 className='projectCard-content-block-title'>{title}</h4>
          <p className='projectCard-content-block-description'>
            {sliceDescription(description) + '...'}
          </p>
        </div>
        <div
          className='projectCard-readMore-button'
          onClick={() => handleClick(id)}
        >
          Read more ...
        </div>
      </div>
    </div>
  );
}

export default withRouter(PortfolioItem);

PortfolioItem.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  projectTechnologies: PropTypes.array,
  id: PropTypes.string,
};
