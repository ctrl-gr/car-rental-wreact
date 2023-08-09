import React, {useState} from 'react';
import {useLoginMutation} from '../../auth/auth.service';
import authHelper from "../../auth/auth-helper";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [login, {isLoading}] = useLoginMutation();

    const handleLogin = async () => {
        const {data, error} = await login({username, password});
        localStorage.setItem("user", JSON.stringify(data.jwttoken))
        if (data) {
            authHelper()
        }
        if (error) {
            console.log('errore nel login')
        }
    };


    return (
        <div>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin} disabled={isLoading}>
                Login
            </button>
        </div>
    );
}

export default Login;
