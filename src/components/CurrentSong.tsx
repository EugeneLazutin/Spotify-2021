import React from 'react';
import styled from 'styled-components';
import useCurrentSong from "../hooks/useCurrentSong";
import Logo from '../../content/Spotify_logo_without_text.svg';

const Album = styled.img`
    max-width: 400px;
`;

const SongName = styled.a`
    font-size: 24px;
    color: black;
    text-decoration: none;
    
    &:hover { color: #404040 }
`;

const ArtistName = styled(SongName)`
    font-size: 16px;
`;

const CurrentSong = () => {
    const song = useCurrentSong();

    if (!song) {
        return (
            <img alt="Spotify logo" src={Logo}/>
        );
    }

    return (
        <>
            <Album alt="album" src={song.album.images[0].url}/>
            <SongName href={song.external_urls.spotify}>{song.name}</SongName>
            <ArtistName href={song.artists[0].external_urls.spotify}>{song.artists[0].name}</ArtistName>
        </>
    )
};

export default CurrentSong;