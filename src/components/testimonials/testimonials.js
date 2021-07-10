import React from 'react';
import TestimonialsItem from './testimonialsItem';
import { TESTIMONIALS } from '../../mockData/testimonials';
import { TESTIMONIALS_SECTION } from '../../mockData/sectionHeadings';

export default function Testimonials() {
  return (
    <section className='section my-services' data-section='section2'>
      <div className='container'>
        <div className='section-heading'>
          <h2>{TESTIMONIALS_SECTION.title}</h2>
          <div className='line-dec'></div>
          <span>{TESTIMONIALS_SECTION.description}</span>
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
