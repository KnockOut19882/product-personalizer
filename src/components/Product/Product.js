import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import React, { useState, useMemo } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';


const Product = ({ name, title, basePrice, colors, sizes, ...props }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const price = useMemo(() => basePrice + (sizes.find(s => s.name === currentSize)?.additionalPrice || 0), [basePrice, currentSize, sizes]);


  return (
    <article className={styles.product}>
      <ProductImage name={name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <ProductForm
          {...{ colors, sizes, title, price, currentColor, setCurrentColor, currentSize, setCurrentSize }}
        />
      </div>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string),
  sizes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })),
  title: PropTypes.string,
};

export default Product;