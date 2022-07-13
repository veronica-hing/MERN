import axios from 'axios';

export const FetchButton = (props)=> {
    const fetchPokemons = () => {
        let pokeDex = [];//populate with names of pokemons
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(res => {
                return res.data;
            })
            .then( res => {
                res.results.map(pokemon =>{
                    pokeDex.push(pokemon.name);
                });
                props.setPokemons(pokeDex);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return(
        <button onClick = { fetchPokemons }>Fetch Pokemon</button>
    )
}