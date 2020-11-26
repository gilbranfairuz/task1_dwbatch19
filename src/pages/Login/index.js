import {useContext} from 'react';
import {AppContext} from "../../context/appContext";

import {Link, useHistory} from 'react-router-dom';
import { Input, Button, Tagline, Headerauth} from '../../components';

import './login.scss';

const Login = () => {
    const [state, dispatch] = useContext(AppContext);
    const router = useHistory();

    const handleLogin = () => {
        dispatch({
            type: "LOGIN",
        });
        router.push("/");

    };

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
                        <Button title="Login" onClick={handleLogin}/>
                        State Login saat ini {state.isLogin ? "Sedang Login " : "Belum Login"}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Login
