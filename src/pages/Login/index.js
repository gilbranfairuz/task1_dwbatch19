import React from 'react'
import {Link} from 'react-router-dom';
import { Input, Button, Tagline, Headerauth} from '../../components';

import './login.scss';

const Login = () => {
    return (
        <div className="container">
            <div className="authentication">
                <Headerauth/>
                <div className="main-page">
                    <div className="left">
                        <Tagline />
                        <Link to="/register"><Button title="Register"/></Link>
                    </div>
                    <div className="right">
                        <div className="section-title green">Login</div>
                        <Input placeholder="Username"/>
                        <Input type="Password" placeholder="Password"/>
                        <Link to="/"><Button title="Login"/></Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Login
