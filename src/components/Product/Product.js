import { useState } from 'react';
import styles from './Product.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`}
        />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {props.basePrice}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((size) => (
                <li>
                  <button
                    type="button"
                    className={clsx(size.name === currentSize && styles.active)}>
                    {size.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              <li>
                <button type="button" className={clsx(styles.colorBlack, styles.active)} />
              </li>
              <li>
                <button type="button" className={clsx(styles.colorRed)} />
              </li>
              <li>
                <button type="button" className={clsx(styles.colorWhite)} />
              </li>
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  );
};

Product.propTypes = {
  basePrice: PropTypes.number,
  colors: PropTypes.array,
  id: PropTypes.number,
  name: PropTypes.string,
  sizes: PropTypes.array,
  title: PropTypes.string
};
export default Product;
