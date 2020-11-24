import React from 'react'
import { Logo, Music } from '../../assets';
import { Input, Button, Tagline } from '../../components';
import './login.scss';

const Login = () => {
    return (
        <div className="container">
            <div className="authentication">
                <div className="header-auth">
                    <img src={Logo}></img>
                </div>
                <div className="main-page">
                    <div className="left">
                        <Tagline />
                        <Button title="Register"/>
                    </div>
                    <div className="right">
                        <div className="section-title green">Login</div>
                        <Input placeholder="Username"/>
                        <Input type="Password" placeholder="Password"/>
                        <Button title="Login"/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Login
