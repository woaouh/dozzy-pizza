import React from 'react';
import classNames from 'classnames';

import classes from './Button.module.sass';

export function Button({ onClick, className, outline, children }) {
  return (
    <button
      className={classNames(classes.Button, className, {
        [classes.Outline]: outline,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
