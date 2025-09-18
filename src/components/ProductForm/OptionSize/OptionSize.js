import productStyles from '../../Product/Product.module.scss';


const OptionSize = ({ sizes, currentSize, setCurrentSize }) => {
  return (
    <ul className={productStyles.choices}>
      {sizes.map(size => (
        <li key={size.name}>
          <button
            type="button"
            className={currentSize === size.name ? productStyles.active : ''}
            onClick={() => setCurrentSize(size.name)}
          >
            {size.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default OptionSize;