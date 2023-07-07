function printSongsWithPromises(songPromise) {
  songPromise.then((songs) => {
      console.log("All Songs:");
      songs.forEach((song) => {
        console.log(`Title: ${song.title}`);
        console.log(`Artist: ${song.artists[0].name}`);
        console.log(`Duration: ${song.duration}`);
        console.log("--------");
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

//Version 2: Using async/await

async function printSongsWithAsyncAwait(songPromise) {
  try {
    const songs = await songPromise;
    console.log("All Songs:");
    songs.forEach((song) => {
      console.log(`Title: ${song.title}`);
      console.log(`Artist: ${song.artists[0].name}`);
      console.log(`Duration: ${song.duration}`);
      console.log("--------");
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

const songsPromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const songList = [
      {
        title: "Song 1",
        artists: [{ name: "Artist 1" }],
        duration: 200,
      },
      {
        title: "Song 2",
        artists: [{ name: "Artist 2" }],
        duration: 180,
      },
    ];
    resolve(songList);
    // reject("Failed to fetch songs"); // Uncomment this line to simulate a rejected promise
  }, 2000); // Simulating a delay
});

printSongsWithPromises(songsPromise);
// printSongsWithAsyncAwait(songsPromise);
