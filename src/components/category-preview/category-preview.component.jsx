import { useNavigate } from 'react-router-dom';
import Product from '../product/product/product.component';

import './category-preview.styles.scss';

const CategoryPreview = ({ title, products }) => {

  const navigate = useNavigate();

  const redirectPage = _ => {
      navigate(`${title}`)
  }

  return (
    <div className='category-preview-container'>
      <h2>
        <span className='title' onClick={redirectPage}>{title.toUpperCase()}</span>
      </h2>
      <div className='preview'>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </div>
  )
};

export default CategoryPreview;