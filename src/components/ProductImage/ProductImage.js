import productStyles from '../Product/Product.module.scss';

const ProductImage = ({ name, currentColor }) => {
  const imageName = `shirt-${name}--${currentColor}.jpg`;
  const imagePath = `${process.env.PUBLIC_URL}/images/products/${imageName}`;

  return (
    <div className={productStyles.imageContainer}>
      <img
        className={productStyles.image}
        alt={name}
        src={imagePath}
      />
    </div>
  );
};

export default ProductImage;
