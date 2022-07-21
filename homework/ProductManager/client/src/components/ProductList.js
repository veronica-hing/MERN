import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    return (
        <div>
            <h2>Existing Products:</h2>
            {props.product.map( (item, i) =>
                <p key = {i}>
                    <Link to = {item._id}>{item.title}</Link>
                </p>
            )}
        </div>
    )
}

export default ProductList;