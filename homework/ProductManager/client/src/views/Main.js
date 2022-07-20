import React, {useEffect, useState} from 'react';
import ProductForm from '../components/ProductForm';
import axios from 'axios';

const Main = () => {
    const [message, setMessage] = useState("Loading...")
    useEffect(()=>{
        axios.get("http://localhost:8000/api")
        .then(res => setMessage(res.data.message))
    },[]);

    return(
        <div>
            {message}
            <ProductForm />
        </div>
    )
}

export default Main;