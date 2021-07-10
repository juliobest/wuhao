import React from 'react';
import PropTypes from 'prop-types';

export default function EducationItem(props) {
  const { title, period, description } = props;
  return (
    <div className='education-item'>
      <div className='education-item-head'>
        <div className='education-item-title'>{title}</div>
        <div>{period}</div>
      </div>
      <div className='education-item-description'>{description}</div>
    </div>
  );
}

EducationItem.propTypes = {
  title: PropTypes.string,
  period: PropTypes.string,
  description: PropTypes.string,
};
