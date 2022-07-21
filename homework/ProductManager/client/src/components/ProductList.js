import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    const {removeFromDom} = props;
    const deleteProduct = (productId) =>{
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId);
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            <h2>Existing Products:</h2>
            {props.product.map( (item, i) =>
                <p key = {i}>
                    <Link to = {item._id}>{item.title}</Link>
                    <button onClick={(e)=>{deleteProduct(item._id)}}>
                        Delete
                    </button>
                </p>
            )}
        </div>
    )
}

export default ProductList;