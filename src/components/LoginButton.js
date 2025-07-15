import React from 'react'; 

const API_BASE_URL = process.env.REACT_API_BASE_URL; 

const LoginButton = () => {
    const handleLogin = () => {
        window.location.href = `${API_BASE_URL}/auth/login`;
    }

    return (
        <button onClick={handleLogin}>
            Login with Spotify
        </button>
    );
}; 

export default LoginButton;