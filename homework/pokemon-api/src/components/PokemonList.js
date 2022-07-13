import React from 'react';
export const PokemonList = (props) => {

    return(
        <ul>
            {props.pokemons.map((pokemon,i) =>(
                <li key = {i}>{pokemon}</li>
            ))}
        </ul>
    )
}