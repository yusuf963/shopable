import { Button } from '../button/Button'
import './Product.scss';

export const Product = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>£{price}</span>
      </div>
      <Button label='Add to card' buttonType='inverted'/>
    </div>
  );
}