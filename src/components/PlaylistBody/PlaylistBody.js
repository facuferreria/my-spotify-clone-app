import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react'
import { useDataLayer } from '../../provider/useDataLayer';
import { newContext } from '../Context/PlayerContext';
import TrackList from '../TrackList/TrackList';
import './PlaylistBody.scss'

function PlaylistBody() {

    const { playPlaylist, calculateTime } = useContext(newContext);
    const [{ playlists_tracks, playlist_data }] = useDataLayer();
    const [playlistInLibrary, setPlaylistInLibrary] = useState(false);
    let millisec = playlist_data.tracks.items.reduce((prev, item) => prev + item.track?.duration_ms , 0);
    
    return (
        <div className = "main-body">
            <div className = "data-container">
                <div className = "playlist-subcontainer">
                    <div className = "playlist-data">         
                        <img className="playlist-img" src = { playlist_data?.images[0]?.url } alt = "playlist"/>
                        <div className = "list">
                            <p className = "list-type">{ playlist_data?.type.toUpperCase() }</p>
                            <h1 className = "list-name">{ playlist_data?.name }</h1>
                            <div className = "list-info">
                                <p className = "list-owner">{ playlist_data?.owner?.display_name }</p>
                                <p className = "points">.</p>
                                <p>{ playlist_data?.followers.total} me gusta</p>
                                <p className = "points">.</p>
                                <p>{ playlist_data?.tracks.total} canciones</p>
                                <p className = "list-time">{ calculateTime(millisec) }</p>
                            </div>
                        </div>          
                    </div>
                    <div className = "buttons-container">
                        <button className = "playlist-play" onClick = {() => playPlaylist(playlists_tracks)}>
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
                    <TrackList data = {playlists_tracks} time = {calculateTime} isFromPlaylist = {true} /> 
                </div>
            </div>
        </div>
    )
}

export default PlaylistBody