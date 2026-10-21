import { useState } from 'react'

import dados from './data/pokedex-data.json'

import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(dados)
  
  return (
    <div class="pokemon-grid">
      {dados.pokemon.map((pokemon) =>
        <div class="pokemon-card" key={pokemon.id}>
          <h1>{pokemon.name}</h1>
          <img  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name} />
          <li>
            <ul>HP: {pokemon.stats.hp}</ul>
            <ul>Attack: {pokemon.stats.attack}</ul>
            <ul>Defesense: {pokemon.stats.defense} </ul>
            <ul>Special Attack: {pokemon.stats.specialAttack}</ul>
            <ul>Special Defense: {pokemon.stats.specialDefense}</ul>
            <ul>Speed: {pokemon.stats.speed}</ul>
          </li>
        </div>
        )})
      </div>
      
  )
}

export default App
