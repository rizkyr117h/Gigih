import { getArtistByIDRepo } from "../../repositories/artist/artist.js";
import { addSongRepo, getSongByIDRepo ,sortedSongRepo } from "../../repositories/songs/songs.js";


export const getSongByIDUseCase = (id) =>{
    const song = getSongByIDRepo(id);
    if (!song) {
        return null;
    }

    const artist = getArtistByIDRepo(song?.artist_id);
    if (!artist){
        return null;
    }



    return {...song, artist};
};


export const addSongUseCase = (title, artist_id, url) => {
    const artist = getArtistByIDRepo(artist_id);
    if (!artist){
        throw new Error("artist_id is not valid");
    }

    return addSongRepo(title, artist_id, url)
}

//Function Sorted Song
export const sortedSongUseCase = () => {
    const sortedSongs = sortedSongRepo();
    const songsWithArtists = sortedSongs.map((song) => {
        const artist = getArtistByIDRepo(song.artist_id);

        return {...song, artist};
    });

    return songsWithArtists;
}