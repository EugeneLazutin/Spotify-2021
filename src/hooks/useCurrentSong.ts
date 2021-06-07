import {makeRequestAsync} from "../utils";
import {useEffect, useState} from "react";
import Song from "../interfaces/Song";

const useCurrentSong = (): Song => {
    const [song, setSong] = useState();

    useEffect(() => {
        makeRequestAsync('https://api.spotify.com/v1/me/player/currently-playing?market=US').then(data => {
            setSong(data.item);
        });
    }, []);

    return song;
};

export default useCurrentSong;