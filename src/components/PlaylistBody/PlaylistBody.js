import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useDataLayer } from '../../provider/useDataLayer';
import PlaylistTrack from '../PlaylistTrack/PlaylistTrack';
import './PlaylistBody.scss'

function PlaylistBody({ playlistData, playlistTrackData  }) {

    const [{ playlists_tracks }, dispatch] = useDataLayer();
    const [playlistInLibrary, setPlaylistInLibrary] = useState(false);
    let millisec = playlistData.tracks.items.reduce((prev, item) => prev + item.track?.duration_ms , 0);

    const calculateTime = (millisec) => {
        let seconds = (millisec / 1000).toFixed(0);
        let minutes = Math.floor(seconds / 60);
        let hours = "";
        if (minutes > 59) {
            hours = Math.floor(minutes / 60);
            minutes =  minutes - (hours * 60) ;
            hours = `${hours} h`;
        }
        minutes = `${minutes} min`;
        seconds = Math.floor(seconds % 60);
        seconds = (seconds >= 10) ? `${seconds}s` : `0${seconds}s`;
        if (hours != "") {
            return `${hours} ${minutes}`;
        }
        return `${minutes} ${seconds}`;
    }
    
    const playPlaylist = () => {
        let uriTracksArray = [];
        playlists_tracks.forEach(item => uriTracksArray.push(item.track.uri));

        dispatch({
            type: "SET_PLAYING_LIST",
            playing_list: uriTracksArray,
        });
    }

    return (
        <div className = "data-container">
            <div className = "playlist-subcontainer">
                <div className = "playlist-data">         
                    <img className="playlist-img" src = { playlistData.images[0].url } />
                    <div className = "list">
                        <p className = "list-type">{ playlistData.type.toUpperCase() }</p>
                        <h1 className = "list-name">{ playlistData.name }</h1>
                        <div className = "list-info">
                            <p className = "list-owner">{ playlistData.owner.display_name }</p>
                            <p className = "points">.</p>
                            <p>{ playlistData.followers.total} me gusta</p>
                            <p className = "points">.</p>
                            <p>{ playlistData.tracks.total} canciones</p>
                            <p className = "list-time">{ calculateTime(millisec) }</p>
                        </div>
                    </div>          
                </div>
                <div className = "buttons-container">
                    <button className = "playlist-play" onClick = {() => playPlaylist()}>
                        <FontAwesomeIcon icon="fa-solid fa-play" />
                    </button>
                    <div className = "playlist-heart" onClick = {() => setPlaylistInLibrary(!playlistInLibrary)}>
                        {
                            playlistInLibrary
                            ? <FontAwesomeIcon icon="fa-solid fa-heart" size='2x' className='heart'/> 
                            : <FontAwesomeIcon icon="fa-regular fa-heart" size='2x' /> 
                        }
                    </div>
                    <div>
                        <FontAwesomeIcon icon="fa-solid fa-ellipsis" size='2x'/>
                    </div>
                </div>
            </div>
            <div>
                { playlistTrackData.map((item, id) =>  <PlaylistTrack 
                                                            playPlaylist = {playPlaylist} 
                                                            position={id} 
                                                            key= {item.track?.id} 
                                                            track = {item.track} 
                                                            calculateTime = {calculateTime}
                                                        />) 
                }
            </div>
        </div>
    )
}

export default PlaylistBody