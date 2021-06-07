import {useEffect, useState} from "react";
import {makeRequestAsync} from "../utils";
import Song from "../interfaces/Song";

const usePlaylistTracks = (id: string): { track: Song }[] => {
    const [tracks, setTracks] = useState();

    useEffect(() => {
        makeRequestAsync(`https://api.spotify.com/v1/playlists/${id}/tracks`)
            .then(data => {
                setTracks(data.items);
            });
    }, [id]);

    return tracks;
};

export default usePlaylistTracks;


