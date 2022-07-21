import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";

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

    return(
        <div>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}

export default Detail;