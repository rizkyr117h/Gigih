import { addSongUseCase, getSongByIDUseCase, sortedSongUseCase } from "../../usecases/songs/songs.js";

export const  getDetailSong = (req, res) => {
    const { id }= req.params;
    
    try {
        const song = getSongByIDUseCase(id);
        res.json({
        data: song,
        });
    } catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
}

export const  addSong = (req, res) => {

    try {
        const { title, artist_id, url }= req.body;
        const song = addSongUseCase(title, artist_id, url);
        if(!song){
            return res.status(404).json({
                message: "Song Not Found"
            });
        }
        res.json({
            data: song

        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const sortedSongs = (req, res) => {
    try{
        const sortedSongs = sortedSongUseCase();
        res.json({
            data: sortedSongs,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};