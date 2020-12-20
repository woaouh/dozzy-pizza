/* eslint-disable react/forbid-prop-types */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import classes from './Button.module.sass';

export default function Button({
  onClick,
  className,
  outline,
  circle,
  children,
}) {
  return (
    <button
      type="button"
      className={classNames(classes.Button, className, {
        [classes.Outline]: outline,
        [classes.CircleButton]: circle,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  outline: PropTypes.bool,
  circle: PropTypes.bool,
  children: PropTypes.any,
};

Button.defaultProps = {
  className: null,
  onClick: null,
  outline: false,
  circle: false,
  children: null,
};
