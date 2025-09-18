import productStyles from '../../Product/Product.module.scss';
import clsx from 'clsx';

const OptionColor = ({ colors, currentColor, setCurrentColor }) => {
  return (
    <ul className={productStyles.choices}>
              {colors.map(color => (
                <li key={color}>
                  <button
                    type="button"
                    className={clsx(productStyles[`color${color.charAt(0).toUpperCase() + color.slice(1)}`], {
                      [productStyles.active]: currentColor === color,
                    })}
                    onClick={() => setCurrentColor(color)}
                  />
                </li>
              ))}
            </ul>
  )};

export default OptionColor;