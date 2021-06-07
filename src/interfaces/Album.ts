import Artist from "./Artist";
import Image from "./Image";

export default interface Album {
    album_type: string;
    artists: Artist[];
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
    external_urls: {
        spotify: string;
    };
};
