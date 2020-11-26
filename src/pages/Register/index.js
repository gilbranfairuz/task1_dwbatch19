import React from 'react';
import {Link} from 'react-router-dom';
import { Input, Button, Tagline, Headerauth} from '../../components';

const Register = () => {
    return (
        <div className="container">
            <div className="authentication">
                <Headerauth/>
                <div className="main-page">
                    <div className="left">
                        <Tagline />
                        <Link to="/login"><Button title="Login"/></Link>
                    </div>
                    <div className="right">
                        <div className="section-title green">Register</div>
                        <Input placeholder="Email"/>
                        <Input type="Password" placeholder="Password"/>
                        <Input placeholder="Full Name"/>
                        <Button title="Register"/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Register
