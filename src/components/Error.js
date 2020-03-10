import React from 'react';
import PropTypes from 'prop-types';

const Error = error => (
  <p>
    Ops, ocorreu um erro: {error?.message || 'Entre em contato se persistir.'}
  </p>
);

Error.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
};

export default Error;
