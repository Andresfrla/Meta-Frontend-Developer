import recipes from '../recipes'

export default function Menu (){
    return (
        <div className="menu-container">
            <div>
                <h2>This weeks specials!</h2>
                <button>Order Menu</button>
            </div>

            <div className='cards'>
                {
                    recipes.map(recipe => <div key={recipe.id} className='menu-items'>
                        <img src={recipe.image} alt={`Image of ${recipe.title}`}/>
                        <div className='menu-content'>
                            <div className='heading'>
                                <h5>{recipe.title}</h5>
                                <p>{recipe.price}</p>
                            </div>
                                <p>{recipe.description}</p>
                                <button className='orderbtn'>Order Now</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}