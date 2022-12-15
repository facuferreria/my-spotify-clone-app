import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import { useDataLayer } from '../../provider/useDataLayer';
import { newContext } from '../Context/PlayerContext';
import TrackList from '../TrackList/TrackList';

function LibraryContainer() {
    const { playPlaylist, calculateTime } = useContext(newContext);
    const [{ user_library, user }] = useDataLayer();

    return (
        <div className = "main-body">
            <div className = "data-container">
                <div className = "playlist-subcontainer">
                    <div className = "playlist-data">         
                        <img className="playlist-img" src = "https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png" alt = "playlist"/>
                        <div className = "list">
                            <h1 className = "list-name">Tus me gusta</h1>
                            <div className = "list-info">
                                <p className = "list-owner">{ user.display_name }</p>
                                <p className = "points">.</p>
                                <p>{ user_library.total} canciones</p>
                            </div>
                        </div>          
                    </div>
                    <div className = "buttons-container">
                        <button className = "playlist-play" onClick = {() => playPlaylist(user_library.items)}>
                            <FontAwesomeIcon icon="fa-solid fa-play" />
                        </button>
                        <div>
                            <FontAwesomeIcon icon="fa-solid fa-ellipsis" size='2x'/>
                        </div>
                    </div>
                </div>
                <div>
                    <TrackList data = {user_library.items} time = {calculateTime} isFromPlaylist = {true} /> 
                </div>
            </div>
        </div>    
    )
}

export default LibraryContainer