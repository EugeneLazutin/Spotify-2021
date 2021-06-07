import {useEffect, useState} from "react";
import {makeRequestAsync} from "../utils";
import Playlist from "../interfaces/Playlist";

const usePlaylists = ():Playlist[] => {
    const [playlists, setPlaylists] = useState();

    useEffect(() => {
        makeRequestAsync('https://api.spotify.com/v1/me/playlists')
            .then(data => {
                setPlaylists(data.items);
            });
    }, []);

    return playlists;
};

export default usePlaylists;


