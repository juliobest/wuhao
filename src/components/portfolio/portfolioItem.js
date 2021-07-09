import React from 'react';
import PropTypes from 'prop-types';

export default function PortfolioItem(props) {
  const { img, title, description, skills, link } = props;
  return (
    <div className='isotope-item' data-type='nature'>
      <figure className='snip1321'>
        <img src={img} alt='sq-sample26' />
        <figcaption>
          <h4 className='PortfolioItem-title'>{title}</h4>
          <span className='PortfolioItem-description'>{description}</span>
          <div className='additionalInfo'>
            <div className='portfolioItem_skills'>
              Skills:
              <p className='portfolioItem_skillsList'>{skills}</p>
            </div>
            <p className='portfolioItem_skills'>
              Link:
              <a href={link} className='portfolioItem_skillsList'>
                {link}
              </a>
            </p>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

PortfolioItem.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  skills: PropTypes.string,
  link: PropTypes.string,
};
