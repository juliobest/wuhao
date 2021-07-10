import React from 'react';
import PropTypes from 'prop-types';

export default function EmploymentItem(props) {
  const { company, position, period, description, responsibilities } = props;
  return (
    <div className='education-item'>
      <div className='employment-position'>{position}</div>
      <div className='education-item-head employment-item-head'>
        <div className='education-item-title '>{company}</div>
        <div>{period}</div>
      </div>
      <div className='education-item-description'>{description}</div>
      <br />
      <div>Responsibilities:</div>
      <ol className='employment-item-description'>
        {responsibilities.map((item) => (
          <li type='disc' key={item}>
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
}

EmploymentItem.propTypes = {
  company: PropTypes.string,
  position: PropTypes.string,
  period: PropTypes.string,
  description: PropTypes.string,
  responsibilities: PropTypes.array,
};
