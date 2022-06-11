import React, { useState } from 'react'
import { Link, useNavigate, useAlert } from 'react-router-dom'

import { useAxios } from '../../services/axios.service'
import './SignUpPage.css'
import { useLocalStorage } from '../../services/localStorage.service'

export default function SignUpPage() {

    const navigate = useNavigate();
    const http = useAxios();
    const ls = useLocalStorage();

    function attemptSignUp(user) {
        http.createNewUser(user)
            .then(res => {
                const user = res.data.user;
                ls.saveUser(user);
                navigate(`/`);
            }).catch(err => {

                if (err.response.status == 400 ? alert("message: that email already exists") : alert("message: there was an eror creating a new user"))

                    console.error(err);
            });
    }

    return (
        <div className="login">
            <br />
            <br />
            <SignUpForm onSubmit={attemptSignUp} />
            <hr />
            <Link to="/login">
                <button type="button">Log In</button>
            </Link>
        </div>
    )
}

function SignUpForm({ onSubmit }) {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [isEmailTaken, setIsEmailTaken] = useState(true);

    function handleChange(e) {
        var name = e.target.name;
        var value = e.target.value;

        setUser({
            ...user,
            [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (user.email && user.password) {
            onSubmit(user);
        }
    }

    return (

        <form onSubmit={handleSubmit}>
            <div className="email">

                <label >Email:</label>
                <input type="text"
                    className={isEmailTaken ? 'email-taken' : ''}
                    name="email"
                    required
                    value={user.email}
                    onChange={handleChange} />
            </div>

            <label>Password:</label>
            <input type="password"
                name="password"
                value={user.password}
                onChange={handleChange} />
            <br />

            <button type="submit"
                disabled={!user.email || !user.password}>Sign Up</button>
        </form>
    )
}