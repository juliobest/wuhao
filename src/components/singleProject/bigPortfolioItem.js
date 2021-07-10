import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function BigPortfolioItem(props) {
  const {
    project: {
      img,
      title,
      description,
      skills,
      link,
      testimonial,
      clientName,
      clientPosition,
      clientImg,
    },
  } = props;

  return (
    <div className='bigPortfolioItem '>
      <h4 className='bigPortfolioItem-title'>{title}</h4>
      <Link
        to='/portfolio'
        className='PortfolioItem-readMore PortfolioItem-readMore-top'
      >
        Back to portfolio
      </Link>

      <div className='bigPortfolioItem-innerWrap'>
        <div className='bigPortfolioItem-content'>
          <div className='bigPortfolioItem-description'>{description}</div>
          <div className='bigPortfolioItem-link-section'>
            <p className='bigPortfolioItem-heading'>Link to site:</p>
            <a
              className='bigPortfolioItem-link'
              href={link}
              target='_blank'
              rel='noreferrer'
            >
              {link}
            </a>
          </div>
          <div className='bigPortfolioItem-skills-section'>
            <p className='bigPortfolioItem-heading'>Used skills:</p>
            <ol>
              {skills &&
                skills.map((item, index) => (
                  <li type='disc' key={index}>
                    {item}
                  </li>
                ))}
            </ol>
          </div>
        </div>
        <div className='bigPortfolioItem-img'>
          <img src={img} alt='sq-sample26' />
        </div>
      </div>

      <div className='bigPortfolioItem-testimonial'>
        <p className='bigPortfolioItem-testimonial-title'>
          Feedback From Client
        </p>
        <div className='bigPortfolioItem-testimonial-innerWrap'>
          <div className='clintPhoto-wrap bigPortfolioItem-testimonial-photo'>
            <img className='clintPhoto' src={clientImg} alt='client' />
          </div>
          <p className='bigPortfolioItem-testimonial-clientName'>
            {clientName}
          </p>
          <p className='bigPortfolioItem-testimonial-clientPosition'>
            {clientPosition}
          </p>
          <p className='bigPortfolioItem-testimonial-text'>"{testimonial}"</p>
        </div>
      </div>
      <Link to='/portfolio' className='PortfolioItem-readMore'>
        Back to portfolio
      </Link>
    </div>
  );
}

BigPortfolioItem.propTypes = {
  project: PropTypes.object,
};
