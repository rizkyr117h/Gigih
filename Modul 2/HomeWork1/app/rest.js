import express from "express";
import songsRouter from "../routes/songs.js";
const app = express();

export function startRest () {
    app.use(express.json());

    app.use("/songs", songsRouter);

    app.use((req,res) => {
        res.status(404).json({
            message: "Not Found"
        })
    })

    app.listen(3000, () =>{
        console.log(`Server running on port 3000`);
    })
}


