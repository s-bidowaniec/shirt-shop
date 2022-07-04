import styles from './OptionColor.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionColor = (props) => {
  const prepareColorClassName = (color) => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };
  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {props.colors.map((color) => (
          <li key={props.colors.indexOf(color)}>
            <button
              onClick={() => props.setCurrentColor(color)}
              type="button"
              className={clsx(
                prepareColorClassName(color),
                color === props.currentColor && styles.active
              )}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

OptionColor.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
  currentColor: PropTypes.string,
  setCurrentColor: PropTypes.func
};

export default OptionColor;
