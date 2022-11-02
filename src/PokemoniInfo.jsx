import "./poke.css"

const Pokemon = (props) => {
    
    return (
        <div>
            <div className="pokemonikaart">
                <img src= {props.pokemon.sprites.front_default} className="pilt"/>
                <div className="andmed">
                    <div className= "ID"> ID: {props.pokemon.id}</div>
                    <div className= "nimi">Nimi: {props.pokemon.name}</div>
                    <div className= "kaal">Kaal: {props.pokemon.weight} kg</div>
                    <div className= "kõrgus">Kõrgus: {props.pokemon.height} ft</div>
                </div>
            
            </div>
        </div>
    )
}


export default Pokemon