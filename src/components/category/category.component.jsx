import { useNavigate } from 'react-router-dom'
import './category.styles.scss'

const Category = ({ category: { imageUrl, title, route } }) => {
  const navigate = useNavigate()

  const navigatePage = () => navigate(`shop${route}`)

  return (
           <>
            <div className='category-container' onClick={navigatePage}>
          <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
          }} />
          <div className='category-body-container'>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
           </>
  )
}

export default Category
