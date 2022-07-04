import styles from './ProductOptions.module.scss';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

const ProductOptions = (props) => {
  const addToCart = (event) => {
    event.preventDefault();
    console.log('Summary\n==========');
    console.log('Name:', props.title);
    console.log('Price:', props.getPrice);
    console.log('Size:', props.currentSize.name);
    console.log('Color:', props.currentColor);
  };
  return (
    <form>
      <OptionSize
        sizes={props.sizes}
        currentSize={props.currentSize}
        setCurrentSize={props.setCurrentSize}
      />
      <OptionColor
        colors={props.colors}
        currentColor={props.currentColor}
        setCurrentColor={props.setCurrentColor}
      />
      <Button onClick={addToCart} className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

ProductOptions.propTypes = {
  title: PropTypes.string,
  getPrice: PropTypes.number,
  currentSize: PropTypes.object,
  setCurrentSize: PropTypes.func,
  currentColor: PropTypes.string,
  setCurrentColor: PropTypes.func,
  sizes: PropTypes.array,
  colors: PropTypes.array
};

export default ProductOptions;
