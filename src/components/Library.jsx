import React from 'react';
import LibrarySong from "./LibrarySong"

function Library({ libraryStatus, setIsPlaying, isPlaying, audioRef, setSongs, songs, setCurrentSong }) {
    return (
        <div className={`library ${libraryStatus ? 'active-library' : ""}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) =>
                    <LibrarySong setIsPlaying={setIsPlaying}
                        isPlaying={isPlaying}
                        audioRef={audioRef}
                        setCurrentSong={setCurrentSong}
                        song={song}
                        key={song.id}
                        songs={songs}
                        setSongs={setSongs} />
                )}
            </div>
        </div>
    );
}

export default Library;