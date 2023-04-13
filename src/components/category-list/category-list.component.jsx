import Category from "../category/category.component"
import './category-list.styles.scss'

const CategoryList = () => {

    const categories =[
        {
          "id": 1,
          "title": "hats",
          "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
          "route" : "/hats"
        },
        {
          "id": 2,
          "title": "jackets",
          "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
          "route" : "/jackets"
        },
        {
          "id": 3,
          "title": "sneakers",
          "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
          "route" : "/sneakers"
        },
        {
          "id": 4,
          "title": "womens",
          "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
          "route" : "/womens"
        },
        {
          "id": 5,
          "title": "mens",
          "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
          "route" : "/mens"
        }
      ]


    return (
        <div className='categories-container'>
            {categories.map(category => 
                (<Category key={category.id} category={category}/>)
            )}
        </div>
    )
}

export default CategoryList;