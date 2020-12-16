import classNames from 'classnames';

import classes from './Selector.module.sass';

export default function Selector({ types, sizes, activeType, activeSize, onSelectType, onSelectSize }) {
  const doughTypes = ['thin', 'traditional'];
  const pizzaSizes = [26, 30, 40];

  return (
    <div className={classes.Selector}>
      <ul>
        {doughTypes.map((type, index) => (
          <li
            key={`${type}_${index}`}
            className={classNames({
              [classes.Active]: activeType === index,
              [classes.Disabled]: !types.includes(index),
            })}
            onClick={() => onSelectType(index)}
          >
            {type}
          </li>
        ))}
      </ul>
      <ul>
        {pizzaSizes.map((size, index) => (
          <li
            key={`${size}_${index}`}
            className={classNames({
              [classes.Active]: activeSize === index,
              [classes.Disabled]: !sizes.includes(size),
            })}
            onClick={() => onSelectSize(index)}
          >
            {size} sm.
          </li>
        ))}
      </ul>
    </div>
  )
}
