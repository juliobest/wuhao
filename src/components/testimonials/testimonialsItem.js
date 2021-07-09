import React from 'react';
import PropTypes from 'prop-types';

export default function TestimonialsItem(props) {
  const { img, name, testimonial } = props;
  return (
    <div className='col-md-6'>
      <div className='service-item'>
        <div className='clintPhoto-wrap'>
          <img className='clintPhoto' src={img} alt='client' />
        </div>
        <h4>{name}</h4>
        <p className='clientTestimonial'>'{testimonial}'</p>
      </div>
    </div>
  );
}

TestimonialsItem.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  testimonial: PropTypes.string,
};
