import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';


const Product = ({ name, title, basePrice, colors, sizes, ...props }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);
  
  const getPrice = () => basePrice + (sizes.find(s => s.name === currentSize)?.additionalPrice || 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Podsumowanie produktu:');
    console.log('Nazwa:', title);
    console.log('Cena końcowa:', getPrice());
    console.log('Wybrany kolor:', currentColor);
    console.log('Wybrany rozmiar:', currentSize);
  };

  return (
    <article className={styles.product}>
      <ProductImage name={name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form onSubmit={handleSubmit}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map(size => (
                <li key={size.name}>
                  <button
                    type="button"
                    className={currentSize === size.name ? styles.active : ''}
                    onClick={() => setCurrentSize(size.name)}
                  >
                    {size.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map(color => (
                <li key={color}>
                  <button
                    type="button"
                    className={clsx(styles[`color${color.charAt(0).toUpperCase() + color.slice(1)}`], {
                      [styles.active]: currentColor === color,
                    })}
                    onClick={() => setCurrentColor(color)}
                  />
                </li>
              ))}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
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