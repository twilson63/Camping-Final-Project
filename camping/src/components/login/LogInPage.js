import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router';
import { useAxios } from '../../services/axios.service'
import { Link } from 'react-router-dom';
import { useLocalStorage } from '../../services/localStorage.service';
import '../login/LogInPage.css'
import { faCampground } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';

export default function LogInPage() {

    return (<div className="login-root">
        <div className="login">
            <Link to="/signup">
                <button type="button">Sign Up</button>
            </Link>

            <LogInForm />
            <hr />
            <h4 className="login-faCampground" ><span >Boon  &nbsp;<FontAwesomeIcon icon={faCampground} />&nbsp; Dock's</span></h4>

            {/* <h3 className='header'>Boon Dock's</h3> */}
            <br />
        </div >
    </div >
    )
}

function LogInForm() {

    const navigate = useNavigate();
    const animationTime = 300;
    const http = useAxios();
    const localStorageService = useLocalStorage()

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

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
            http.login(user)
                .then(res => {
                    localStorageService.saveUser(res.data.user);
                    navigate(`/`);
                }).catch(err => {
                    console.error(err)

                    emailRef.current.classList.add("shake");
                    passwordRef.current.classList.add("shake");

                    setUser({ email: '', password: '' });

                    setTimeout(() => {
                        emailRef.current.classList.remove("shake");
                        passwordRef.current.classList.remove("shake");
                    }, animationTime);
                });
        }
    }

    return (<div className="login-contianer">
        <form onSubmit={handleSubmit}>
            <label className='label'>Email:</label>
            <input type="text"
                ref={emailRef}
                name="email"
                value={user.email}
                style={{ "--animationTime": `${animationTime}ms` }}
                onChange={handleChange} />
            <br />

            <label className='label'>Password:</label>
            <input type="password"
                ref={passwordRef}
                name="password"
                value={user.password}
                style={{ "--animationTime": `${animationTime}ms` }}
                onChange={handleChange} />
            <br />

            <button type="submit">Log In</button>
        </form>
    </div>
    )
}