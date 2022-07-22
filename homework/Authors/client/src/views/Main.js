import axios from 'axios';
import { useEffect, useState } from 'react';
import AllAuthors from '../components/AllAuthors';
import AuthorForm from '../components/AuthorForm.jsx';

function Main(){
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() =>{
        axios.get('http://localhost:8000/api/authors')
            .then(res =>{
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    const removeFromDom = authorId => {
        setAuthors(authors.filter(a => a._id != authorId));
    }
    const refreshList = () => {
        axios.get('http://localhost:8000/api/authors')
            .then(res =>{
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }

    return(
        <div className="App">
            <h1>Favorite Authors</h1>
            <AuthorForm refreshList = {refreshList}/>
            <hr></hr>
            {loaded && <AllAuthors authors = {authors} removeFromDom = {removeFromDom}/>}
        </div>
    )
}

export default Main;