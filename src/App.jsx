import React, { useState, useEffect } from 'react'
import Pais from './Pais/Pais'
import PokemoniInfo from "./PokemoniInfo"
import PokemonideList from "./PokemonideList"
import './App.css'


function App() { 
  const [valitudPokemon, setValitudPokemon]=useState()
  const [pokemonid, setPokemonid] = useState ([])
  const [eelmineUrl, setEelmineUrl]= useState(null)
  const [jargmineUrl, setJargmineUrl] =useState (null)


  useEffect(() => {
    pariPokemonid('https://pokeapi.co/api/v2/pokemon/')
  }, [])
  
  const pariPokemonid = async (url) => {
    const laetudPokemonid = await (await fetch (url)).json()    
    setPokemonid (laetudPokemonid.results)
    setEelmineUrl(laetudPokemonid.previous)
    setJargmineUrl(laetudPokemonid.next)
  }
   
  const pariPokemoniInfo = async (url) => {
    if (!url) return 
    const pokemoniInfo = await (await fetch(url)).json()
    setValitudPokemon(pokemoniInfo)
  }

  return (
    <div className="App">
      <Pais/>      
      <a onClick={() => {setValitudPokemon(undefined) }}><button type= "kustuta">Kustuta valitud pokemon</button></a>
      <br/>
      <br/>
      {valitudPokemon ? <PokemoniInfo pokemon = {valitudPokemon}/>:
      <PokemonideList pokemonid ={pokemonid} pariPokemoniInfo={pariPokemoniInfo} />}
      <div>
        <span onClick= {()=> { pariPokemonid(eelmineUrl) }}><button type= "kustuta">{'<'} Eelmine leht</button></span>
        <span> </span>
        <span onClick= {()=> { pariPokemonid(jargmineUrl) }}><button type= "kustuta">Järgmine leht{'>'}</button></span>
      </div>
    
    </div>
  )
}

export default App
