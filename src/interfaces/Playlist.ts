import Image from "./Image";
import Owner from "./Owner";

export default interface Playlist {
    collaborative: boolean;
    description: string;
    href: string;
    id: string;
    images: Image[];
    name: string;
    owner: Owner;
    primary_color?: any;
    public: boolean;
    snapshot_id: string;
    tracks: {
        href: string;
        total: number;
    };
    type: string;
    uri: string;
}