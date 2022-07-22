import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
const UpdateForm = (props) => {
    const { id } = useParams();
    const [name, setName] = useState("");
    let [formErrors, setFormErrors] = useState({});
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                //console.log(res.data.results.name); sometimes it be wonky
                setName(res.data.results.name);
            })
    }, []);
    
    const updateAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/' + id, {
            name
        })
            .then((res) => {
                console.log(res);
                if(res.data.errors){
                    setFormErrors(res.data.errors);
                }else{
                    setFormErrors({})
                    window.location = "/authors";
                }
            })
            .catch(err => console.error(err));
    }

    const goHome = () => {
        window.location = "/authors";
    }
    
    return (
        <div>
            <h1>Update An Author</h1>
            <form onSubmit={updateAuthor}>
                <p>
                    <label>Author</label><br />
                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }}/>
                </p>
                <p className="text-danger">{formErrors.name?.message}</p>
                <button type="submit">Submit Changes</button>
            </form>
                <button onClick = {goHome}>Cancel</button>
        </div>
    )
}
    
export default UpdateForm;