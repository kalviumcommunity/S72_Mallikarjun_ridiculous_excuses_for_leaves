import React from 'react';
import PropTypes from 'prop-types';

const ExcuseComponent = ({ title, reason }) => {
  return (
    <div>
      <h1>Excuse: {title}</h1>
      <p>Reason: {reason}</p>
    </div>
  );
};

ExcuseComponent.propTypes = {
  title: PropTypes.string.isRequired,
  reason: PropTypes.string.isRequired,
};

export default ExcuseComponent;
