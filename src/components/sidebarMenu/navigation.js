import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

function Navigation(props) {
  const {
    location: { pathname },
  } = props;

  const LINKS = [
    {
      id: 1,
      title: 'About Me',
      pathname: '/',
    },
    {
      id: 2,
      title: 'Portfolio Projects',
      pathname: '/portfolio',
    },
    {
      id: 3,
      title: 'My Skills',
      pathname: '/skills',
    },
    // {
    //   id: 4,
    //   title: 'What my Clients say',
    //   pathname: '/testimonials',
    // },
    // {
    //   id: 5,
    //   title: 'My Resume',
    //   pathname: '/resume',
    // },
  ];

  return (
    <nav className='main-nav' role='navigation'>
      <ul className='main-menu'>
        {LINKS.map((item) => (
          <li
            key={item.id}
            className={cx([
              item.pathname === pathname && 'main-nav-opened-link',
            ])}
          >
            <Link to={item.pathname}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default withRouter(Navigation);
