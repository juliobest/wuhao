import React from 'react';
import TestimonialsItem from './testimonialsItem';
import { TESTIMONIALS } from '../../mockData/mockData';

export default function Testimonials() {
  return (
    <section className='section my-services' data-section='section2'>
      <div className='container'>
        <div className='section-heading'>
          <h2>What my clients say?</h2>
          <div className='line-dec'></div>
          <span>
            Curabitur leo felis, rutrum vitae varius eu, malesuada a tortor.
            Vestibulum congue leo et tellus aliquam, eu viverra nulla semper.
            Nullam eu faucibus diam. Donec eget massa ante.
          </span>
        </div>
        <div className='row'>
          {TESTIMONIALS.map((item) => (
            <TestimonialsItem
              img={item.img}
              name={item.name}
              testimonial={item.testimonial}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
