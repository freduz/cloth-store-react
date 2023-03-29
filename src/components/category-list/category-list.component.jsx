import Category from "../category/category.component"
import './category-list.styles.scss'

const CategoryList = ({categories}) => {
    return (
        <div className='categories-container'>
            {categories.map(category => 
                (<Category key={category.id} category={category}/>)
            )}
        </div>
    )
}

export default CategoryList;