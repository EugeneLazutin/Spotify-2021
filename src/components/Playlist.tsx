import React from 'react';
import usePlaylistTracks from "../hooks/usePlaylistTracks";
import Logo from '../../content/Spotify_logo_without_text.svg';
import {useParams} from 'react-router-dom';
import {Table} from '../styles';

const Playlist = () => {
    const {id}: { [key: string]: string } = useParams();
    const tracks = usePlaylistTracks(id);

    if (!tracks) {
        return (
            <img alt="Spotify logo" src={Logo}/>
        );
    }

    return (
        <Table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Album</th>
                <th>Artist</th>
            </tr>
            </thead>
            <tbody>
            {tracks.map(({track}) => {
                return (
                    <tr>
                        <td>{track.name}</td>
                        <td>{track.album.name}</td>
                        <td>{track.artists[0].name}</td>
                    </tr>
                );
            })}
            </tbody>
        </Table>
    )
};

export default Playlist;