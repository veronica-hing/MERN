import React, {useState} from 'react';
import axios from 'axios';

const AuthorForm = (props) => {
    let [formInfo, setFormInfo] = useState({});
    let [formErrors, setFormErrors] = useState({});
    const changeHandler = (e)=>{
        if(e.target.type == "checkbox"){
            setFormInfo({
                ...formInfo,
                [e.target.name]: e.target.checked
            })
        }else{
            setFormInfo({
                ...formInfo,
            [e.target.name]: e.target.value
            })
        }
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors", formInfo)
        .then(response=>{
            console.log("response on submit", response)
            props.refreshList();
            if(response.data.errors){
                setFormErrors(response.data.errors);
            }else{
                setFormErrors({})
            }
        })
        .catch(err=>console.log(err))
    }

    return (
        <div>
            <h3>Example</h3>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input type="text" name="name" className="form-control" onChange={changeHandler} />
                    <p className="text-danger">{formErrors.name?.message}</p>
                </div>

                <button type = "submit">Add Author</button>
            </form>
        </div>
    );
}

export default AuthorForm;