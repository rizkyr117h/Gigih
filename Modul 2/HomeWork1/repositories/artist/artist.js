import artists from './json/artist.json' assert { type: "json" };

export const getArtistByIDRepo = (id) => {
    const artist = artists.find((artist) => artist.id === Number(id));

    return artist;
}

