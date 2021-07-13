import React from 'react';
import PropTypes from 'prop-types';

export default function MySkills(props) {
  const { section, skillsList } = props;

  return (
    <div className='isotope-item'>
      <div className='skillCard-wrap'>
        <h4 className='skillCard-title'>{section}</h4>
        <ul className='skillCard-skillsList'>
          {skillsList.map((item) => (
            <li className='skillCard-skill' key={item.id}>
              <img src={item.icon} alt={item.skill} />
              <div className='skillCard-skill-text'>{item.skill}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

MySkills.propTypes = {
  section: PropTypes.string,
  skillsList: PropTypes.array,
};
