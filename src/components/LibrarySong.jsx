import React from 'react';

function LibrarySong({ setIsPlaying, isPlaying, audioRef, setSongs, songs, song, setCurrentSong }) {
    const songSelectHandler = async () => {
        await setCurrentSong(song);
        // if (isPlaying) {
        //     const promisePlay = audioRef.current.play();
        //     if (promisePlay !== undefined) {
        //         promisePlay.then(audio => {
        //             audioRef.current.play();
        //         })
        //     }
        // }

        //add active song
        const chosenSongs = songs.map((item) => {
            if (item.id === song.id) return { ...item, active: true };
            return { ...item, active: false };
        });
        setSongs(chosenSongs);
    }
    return (
        <div className={`library-song ${song.active ? 'selected' : ''}`}
            onClick={songSelectHandler}
        >
            <img src={song.cover} alt={song.name} />
            <div className="song-desc">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
}

export default LibrarySong;