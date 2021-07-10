import React from 'react';
import PropTypes from 'prop-types';

export default function Progressbar(props) {
  const { done } = props;
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <div>
      <div className='progress'>
        <div className='progress-done' style={style}></div>
      </div>
    </div>
  );
}

Progressbar.propTypes = {
  done: PropTypes.number,
};
