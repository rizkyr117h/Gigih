import express from 'express';
import { addSong, getDetailSong, sortedSongs } from '../controllers/rest/songs.js';

const router = express.Router();

//Get Spesific id
router.get("/:id", getDetailSong);
router.post("/", addSong);
router.get("/", sortedSongs);


export default router;