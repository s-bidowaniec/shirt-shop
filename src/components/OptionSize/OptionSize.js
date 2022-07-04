import styles from './OptionSize.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionSize = (props) => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {props.sizes.map((size) => (
          <li key={props.sizes.indexOf(size)}>
            <button
              onClick={() => props.setCurrentSize(size)}
              type="button"
              className={clsx(props.currentSize.name === size.name && styles.active)}>
              {size.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

OptionSize.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.object),
  currentSize: PropTypes.object,
  setCurrentSize: PropTypes.func
};

export default OptionSize;
