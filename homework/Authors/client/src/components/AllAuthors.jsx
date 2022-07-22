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
        <div className="col-5 mx-auto">
            <thead>
                <tr>
                    <th>Authors</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {
                alphabetic.map((item)=>{
                    return(
                        <tr key = {item._id}>
                            <td>{item.name}</td>
                            <td>
                                <button className = "btn btn-danger m-1 " onClick = {e=>deleteAuthor(item._id)}>Delete</button>
                                <Link className = "btn btn-primary m-1"to={"/authors/" + item._id + "/edit"}>
                                    Edit
                                </Link>
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </div>
    );
};

export default AllAuthors;