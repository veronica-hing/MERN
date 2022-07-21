import React, {useEffect, useState} from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

const Main = () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res =>{
                console.log(res.data);
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[])
    return(
        <div>
            <ProductForm />
            {loaded && <ProductList product = {product}/>}
        </div>
    )
}

export default Main;