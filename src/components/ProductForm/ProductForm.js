import productStyles from '../Product/Product.module.scss';
import Button from '../Button/Button';
import OptionSize from './OptionSize/OptionSize';
import OptionColor from './OptionColor/OptionColor';

const ProductForm = ({ setCurrentColor, setCurrentSize, colors, sizes, title, getPrice, currentColor, currentSize }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Podsumowanie produktu:');
    console.log('Nazwa:', title);
    console.log('Cena końcowa:', getPrice());
    console.log('Wybrany kolor:', currentColor);
    console.log('Wybrany rozmiar:', currentSize);
  };

  return (
    <form onSubmit={handleSubmit}>
          <div className={productStyles.sizes}>
            <h3 className={productStyles.optionLabel}>Sizes</h3>
            <OptionSize sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize} />
          </div>
          <div className={productStyles.colors}>
            <h3 className={productStyles.optionLabel}>Colors</h3>
            <OptionColor colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor} />
          </div>
          <Button className={productStyles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
  );
};

export default ProductForm;
