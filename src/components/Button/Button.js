import styles from './Button.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const Button = (props) => {
  return <button className={clsx(styles.button, props.className)}>{props.children}</button>;
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Button;
