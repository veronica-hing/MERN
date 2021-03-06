import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, Link} from "react-router-dom";


const Detail = (props) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/'+id)
            .then(res => {
                setProduct(res.data);
                console.log(res.data)
                console.log(id)
            })
            .catch(err => console.error(err));
    }, []);

    const deleteProduct = () =>{
        axios.delete('http://localhost:8000/api/product/' + id)
        .then(res => {
            window.location = "/products";
        })
        .catch(err => console.error(err));
    }
    return(
        <div>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/products/" + product._id + "/edit"}>
                Edit
            </Link>
            <button onClick={(e)=>{deleteProduct(product._id)}}>
                Delete
            </button>
        </div>
    )
}

export default Detail;