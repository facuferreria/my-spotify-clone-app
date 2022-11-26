import React from 'react'
import { useDataLayer } from '../../provider/useDataLayer';
import PlaylistTrack from '../PlaylistTrack/PlaylistTrack';

function PlaylistBody({ playlistData, playlistTrackData  }) {

    const [{ playlists_tracks, item }, dispatch] = useDataLayer();

    const calculatePlaylistTime = () => {
        let millisec = playlistData.tracks.items.reduce((prev, item) => prev + item.track?.duration_ms , 0);
        let seconds = (millisec / 1000).toFixed(0);
        let minutes = Math.floor(seconds / 60);
        let hours = "";
        if (minutes > 59) {
            hours = Math.floor(minutes / 60);
            minutes =  minutes - (hours * 60) ;
            hours = `${hours} h`;
            minutes = `${minutes} min`;
        }

        seconds = Math.floor(seconds % 60);
        seconds = (seconds >= 10) ? seconds : seconds + "s";
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
        <div>
            <div>         
                <img src = { playlistData.images[0].url } />
                <p>{ playlistData.type.toUpperCase() }</p>
                <h1>{ playlistData.name }</h1>
                <div>
                    <p>{ playlistData.owner.display_name }</p>
                    <p>{ playlistData.followers.total} me gusta</p>
                    <p>{ playlistData.tracks.total}</p>
                    <p>{ calculatePlaylistTime() }</p>
                </div>
            </div>
            <div>
                <button onClick = {() => playPlaylist()}>PLAY ME!</button>
            </div>
            <div>
                { playlistTrackData.map( (item, id) => <PlaylistTrack playPlaylist = {playPlaylist} position={id} key= {item.track?.id} track = {item.track} /> ) }
            </div>
        </div>
    )
}

export default PlaylistBody