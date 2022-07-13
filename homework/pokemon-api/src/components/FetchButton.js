export const FetchButton = (props)=> {
    const fetchPokemons = () => {
        let pokeDex = [];//populate with names of pokemons
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(res => {
                return res.json();
            })
            .then( res => {
                res.results.map(pokemon =>{
                    pokeDex.push(pokemon.name);
                });
                props.setPokemons(pokeDex);
                console.log(pokeDex);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return(
        <button onClick = { fetchPokemons }>Fetch Pokemon</button>
    )
}