import React, {useState} from 'react';

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstname, lastname, email, password};
    };

    return(
        <div>
            <form onSubmit = {createUser}>
            <div>
                    <div>
                        {
                        firstname < 2 ? 
                        <p>First name must be more than 2 characters</p> : 
                        <p></p>
                        }
                    </div>
                    <label>First name: </label>
                    <input type = "text" onChange = {(e) => setFirstname(e.target.value)} value = {firstname}></input>
                </div>
                <div>
                <div>
                        {
                        lastname < 2 ? 
                        <p>Last name must be more than 2 characters</p> : 
                        <p></p>
                        }
                    </div>
                    <label>Last name: </label>
                    <input type = "text" onChange = {(e) => setLastname(e.target.value)} value = {lastname}></input>
                </div>
                <div>
                <div>
                        {
                        email < 2 ? 
                        <p>email must be more than 2 characters</p> : 
                        <p></p>
                        }
                    </div>
                    <label>Email Address: </label>
                    <input type = "text" onChange = {(e) => setEmail(e.target.value)} value = {email}></input>
                </div>
                <div>
                <div>
                        {
                        password < 8 ? 
                        <p>password must be more than 8 characters</p> : 
                        <p></p>
                        }
                </div>
                    <label>Password: </label>
                    <input type = "password" onChange = {(e) => setPassword(e.target.value)}value = {password}></input>
                <div>
                        {
                        password != confirmpassword ? 
                        <p>password must match</p> : 
                        <p></p>
                        }
                </div>
                    <label>Confirm Password: </label>
                    <input type = "password" onChange = {(e) => setConfirmPassword(e.target.value)}value = {confirmpassword}></input>
                </div>
                <input type = "submit" value = "Create User"/>
            </form>
            <div>
                <h2>Your Form data</h2>
                <p>First Name: {firstname}</p>
                <p>Last Name: {lastname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
            </div>
        </div>
    )
}

export default UserForm;