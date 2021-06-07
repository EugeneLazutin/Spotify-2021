import React from "react";
import {getToken, clearCookie} from "../utils";
import CurrentSong from "./CurrentSong";
import Playlists from "./Playlists";
import Login from "./Login";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {flexCenter} from "../styles";
import styled from 'styled-components';
import Playlist from "./Playlist";

const Wrapper = styled.div`
    ${flexCenter}
    flex: 1 1 auto;
`;

const List = styled.ul`
    list-style-type: none;
`;

const token = getToken();

const App = () => {
    if (token) {
        return (
            <BrowserRouter>
                <nav>
                    <List>
                        <li>
                            <Link to="/song">Current Song</Link>
                        </li>
                        <li>
                            <Link to="/playlists">Playlists</Link>
                        </li>
                        <li>
                            <a href="/" onClick={() => clearCookie('access_token')}>Logout</a>
                        </li>
                    </List>
                </nav>

                <Wrapper>
                    <Switch>
                        <Route exact path="/">
                            <CurrentSong/>
                        </Route>
                        <Route path="/song">
                            <CurrentSong/>
                        </Route>
                        <Route exact path="/playlists">
                            <Playlists/>
                        </Route>
                        <Route path="/playlists/:id">
                            <Playlist/>
                        </Route>
                    </Switch>
                </Wrapper>
            </BrowserRouter>
        );
    }
    return (
        <Login/>
    );
};

export default App;
