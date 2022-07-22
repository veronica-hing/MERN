import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AllAuthors = (props) =>{
    const {removeFromDom, authors} = props;
    const alphabetic = authors.sort((a,b) => (a.name.toLowerCase() < b.name.toLowerCase())? -1 : 1);

    const deleteAuthor = (authorId) =>{
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                removeFromDom(authorId);
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="App">
            <h3>Authors</h3>
            {
                alphabetic.map((item)=>{
                    return(
                        <div className='card mb-3' key = {item._id}>
                            <h2>{item.name}</h2>
                            <button onClick = {e=>deleteAuthor(item._id)}>Delete</button>
                            <Link to={"/authors/" + item._id + "/edit"}>
                                Edit
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default AllAuthors;