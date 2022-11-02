import "./pokelist.css"
const PokemonideListiElement = (props) => {
    return (
        <div onClick={() => {props.pariPokemoniInfo(props.pokemon.url) }}>{props.pokemon.name}</div>
    )
}

const PokemonideList = (props) =>{
    return(
        <div className="pokenimed">
            {props.pokemonid.map(
                pokemon => 
                <PokemonideListiElement 
                    key={pokemon.name}
                    pokemon={pokemon}
                    pariPokemoniInfo={props.pariPokemoniInfo}                                        
                    
                />
            )}
        </div>
    )
}


export default PokemonideList
