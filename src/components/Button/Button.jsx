import React from 'react';
import classNames from 'classnames';

export function Button({ onClick, className, outline, children }) {
  return (
    <button
      className={classNames('button', className, {
        'button--outline': outline,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
