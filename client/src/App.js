import './style.scss'

const App =()=> {
  const categories=[
    {
      id:1,
      title: 'Hats',
      imageUrl:	"https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      id:2,
      title: 'Jackets',
      imageUrl:	"https://i.ibb.co/px2tCc3/jackets.png"
    },    {
      id:3,
      title: 'Sneakers',
      imageUrl:	"https://i.ibb.co/0jqHpnp/sneakers.png"
    },    {
      id:4,
      title: 'Womens',
      imageUrl:	"https://i.ibb.co/GCCdy8t/womens.png"
    },    {
      id:5,
      title: 'Mens',
      imageUrl:	"https://i.ibb.co/R70vBrQ/men.png"
    },
  ]

  return (
    <div className="categories-container">
      {categories.map(({id, title, imageUrl})=>{
        return(
            <div className='category-container' key={id}>
              <div className='background-image'
              style={{backgroundImage: `url(${imageUrl})`}}
              >
                <div className='category-body-container'>
                  <h2>{title}</h2>
                  <p>Show More</p>
                </div>
              </div>
            </div>
            )
      })}
    </div>
  );
}

export {App};