import styles from './ProductImage.module.scss';
import PropTypes from 'prop-types';

const ProductImage = (props) => {
  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        alt={props.productName}
        src={`${process.env.PUBLIC_URL}/images/products/${props.productImage}`}
      />
    </div>
  );
};

ProductImage.propTypes = {
  productName: PropTypes.string,
  productImage: PropTypes.string
};

export default ProductImage;
