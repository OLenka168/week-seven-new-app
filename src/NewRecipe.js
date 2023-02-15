function NewRecipe ({anyRecipe}) {
    return (
        <div>
            <div className="newRecipe">
                <div className="title">
                    <h3>{anyRecipe.recipe.label.lenght < 10 ? anyRecipe.recipe.label : anyRecipe.recipe.label.substring(0,30)}</h3>
                </div>
                <img src={anyRecipe.recipe.image} width='300px' height='300px' alt='pic'/>
            </div>
            <div className="btn">
                <button><a href={anyRecipe.recipe.shareAs} target='_blank'>SHOW MORE</a></button>
            </div>
        </div>
    )
}

export default NewRecipe;