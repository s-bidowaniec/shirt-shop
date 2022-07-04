import { useMemo, useState } from 'react';
import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import ProductImage from '../ProductImage/ProductImage';
import ProductOptions from '../ProductOptions/ProductOptions';

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);
  /*const getPrice = () => {
    useMemo(() => currentSize.additionalPrice + props.basePrice, [currentSize.additionalPrice]);
  };*/
  const getPrice = useMemo(
    () => currentSize.additionalPrice + props.basePrice,
    [currentSize.additionalPrice]
  );
  return (
    <article className={styles.product}>
      <ProductImage
        productName={props.title}
        productImage={`shirt-${props.name}--${currentColor}.jpg`}
      />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <ProductOptions
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          getPrice={getPrice}
          title={props.title}
          sizes={props.sizes}
          colors={props.colors}
        />
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
