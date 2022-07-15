import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const QueryForm = (props) => {
    const[id, setId] = useState();
    const[category, setCategory] = useState("people");
    const navigate = useNavigate();

    const getData = (e)=>{
        e.preventDefault();
        const url = `https://swapi.dev/api/${category}/${id}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(res => {
                props.setData(res);
                if(res.detail == "Not found"){
                    navigate('/lost');
                }
            })
            .catch(err => {
                navigate('/lost');
            })
        navigate(`/${category}/${id}`);
        }

    return(
        <form onSubmit = {getData}>
            <label htmlFor="category">Search for:</label>
            <select htmlFor="category" onChange = {(e)=> setCategory(e.target.value)} defaultValue = "people">
                <option value = "people">People</option>
                <option value = "planets">Planets</option>
                <option value = "starships">Ships</option>
            </select>
            <label htmlFor="id">ID:</label>
            <input htmlFor="id" type="number" onChange = {(e)=>setId(e.target.value)}></input>
            <button type="submit">Search</button>
        </form>
    );
}