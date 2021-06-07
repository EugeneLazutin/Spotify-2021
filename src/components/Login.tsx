import React from 'react';
import styled from 'styled-components';
import {loginUrl} from "../constants";
import SpotifyLogo from "../../content/Spotify_logo_with_text.svg";
import {button, Wrapper} from '../styles';

const Logo = styled.img`
    margin-bottom: 40px;
`;

const LoginBtn = styled.a`
    ${button}
`;

const Login = () => {
    return (
        <Wrapper>
            <Logo alt="Spotify logo" src={SpotifyLogo} />
            <LoginBtn href={loginUrl}>Login with Spotify</LoginBtn>
        </Wrapper>
    );
};

export default Login;
