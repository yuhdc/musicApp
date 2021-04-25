import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight, faPause } from "@fortawesome/free-solid-svg-icons"

function Player({ setSongs, setCurrentSong, songs, currentSong, isPlaying, setIsPlaying, audioRef }) {
    //
    const activeLibraryHandler = (props) => {
        //add active song
        const chosenSongs = songs.map((item) => {
            if (item.id === props.id) return { ...item, active: true };
            return { ...item, active: false };
        });
        setSongs(chosenSongs);
    }
    //event handler
    const songEndHandler = async () => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id)

        await setCurrentSong(songs[(currentIndex + 1) % songs.length])
        if (isPlaying) audioRef.current.play();
    }
    const skipTrackHandler = async (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id)
        if (direction === 'skip-back') {
            if ((currentIndex - 1) === -1) {
                await setCurrentSong(songs[songs.length - 1]);
                activeLibraryHandler(songs[songs.length - 1]);
                return;
            }
            await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex - 1) % songs.length])
        }
        if (direction === 'skip-forward') {
            await setCurrentSong(songs[(currentIndex + 1) % songs.length])
            activeLibraryHandler(songs[(currentIndex + 1) % songs.length])
        }
        if (isPlaying) audioRef.current.play();
    }
    const playSongHandler = () => {
        //if the song isPlaying(true) and we click then set to FALSE plus pause it
        setIsPlaying(!isPlaying);
        console.log("1", isPlaying);
        if (isPlaying) return audioRef.current.pause();
        audioRef.current.play();
    }
    const timeUpdateHandler = (e) => {
        let current = e.target.currentTime;
        let duration = e.target.duration;
        //caculated per
        const roundedCurrentTime = Math.round(current);
        const roundedDuration = Math.round(duration);
        const aPercentage = Math.round(roundedCurrentTime * 100 / roundedDuration)

        setSongInfo({
            ...songInfo, currentTime: current, duration, animationPercent:
                aPercentage
        })
    }
    const getTime = (time) => {
        return (
            //if time excess 60s then 
            Math.floor(time / 60) + ':' + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }
    const dragHandler = (e) => {
        // console.log(e);
        audioRef.current.currentTime = e.target.value;
        setSongInfo({ ...songInfo, currentTime: e.target.value })
    }

    //state
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
        animationPercent: 0,
    })
    //add the styles
    const trackAnimate = {
        transform: `translateX(${songInfo.animationPercent}%)`
    }
    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <div style={{ background: `linear-gradient(to right,${currentSong.color[0]},${currentSong.color[1]})` }} className="track">
                    <input onChange={dragHandler}
                        min={0}
                        max={songInfo.duration}
                        value={songInfo.currentTime}
                        type="range" />
                    <div style={trackAnimate} className="animate-track"></div>
                </div>
                <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon onClick={() => { skipTrackHandler('skip-back') }} className="skip-back" icon={faAngleLeft} size="2x" />
                <FontAwesomeIcon onClick={playSongHandler} className="play" icon={isPlaying ? faPause : faPlay} size="2x" />
                <FontAwesomeIcon onClick={() => { skipTrackHandler('skip-forward') }} className="skip-forward" icon={faAngleRight} size="2x" />
            </div>
            <audio
                onLoadedData={() => {
                    if (isPlaying) audioRef.current.play();
                }}
                onLoadedMetadata={timeUpdateHandler}
                onTimeUpdate={timeUpdateHandler}
                ref={audioRef}
                src={currentSong.audio}
                onEnded={songEndHandler}
            ></audio>
        </div>
    );
}

export default Player;