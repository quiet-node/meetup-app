import React, { Fragment } from 'react';

const NotFound = () => {
  return (
    <Fragment>
      <h1 className='x-large text-primary'>
        <i className='fas fa-exclamation-triangle'> Page Not Found</i>
      </h1>
      <p className='large'>Sorry, page not found</p>
    </Fragment>
  );
};

export default NotFound;
