import React from 'react';
import usePlaylists from "../hooks/usePlaylists";
import Logo from '../../content/Spotify_logo_without_text.svg';
import {Link} from 'react-router-dom';
import {Table} from '../styles';

const Playlists = () => {
    const playlists = usePlaylists();

    if (!playlists) {
        return (
            <img alt="Spotify logo" src={Logo}/>
        );
    }

    return (
        <Table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Owner</th>
                <th>Tracks</th>
            </tr>
            </thead>
            <tbody>
            {playlists.map(playlist => {
                return (
                    <tr key={playlist.id}>
                        <td title={playlist.description}>
                            <Link to={'/playlists/' + playlist.id}>{playlist.name}</Link>
                        </td>
                        <td>{playlist.owner.display_name}</td>
                        <td>{playlist.tracks.total}</td>
                    </tr>
                );
            })}
            </tbody>
        </Table>
    )
};

export default Playlists;