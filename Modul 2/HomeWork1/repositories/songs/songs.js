import songs from "./json/songs.json" assert { type : "json" }
import { v4 as uuid} from "uuid";

//Function Get Detail Song
export const getSongByIDRepo = (id) => {
    const song = songs.find((song) => song.id === id);
    if(song) {
        song.count +=1
    }
    return song;
};

//Function Add Song
export const addSongRepo = (title, artist_id, url) => {
    if (!title) {
        throw Error("title is not valid");
    }
    const newSong = {
        id: uuid(),
        title,
        artist_id,
        url
    }
    songs.push(newSong);

    return newSong;
}

//Function Sorting Song From Count
export const sortedSongRepo = () =>{
    return songs.slice().sort((a, b) => b.count - a.count);
}