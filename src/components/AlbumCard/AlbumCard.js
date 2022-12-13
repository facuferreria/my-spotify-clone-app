import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { newContext } from '../Context/PlayerContext';
import './AlbumCard.scss'

function AlbumCard({ index, infoType, item}) {

    const { playPlaylist, playTrack } = useContext(newContext);
    let image, name, description, itemUri = item.uri;
    
    if (infoType === "recently_played") {
        name = item?.track.name;
        description = item?.track.artists.map(artist => artist.name).join(", ");
        image = item?.track.album.images[1].url;
        itemUri = item.track.uri;
    }
    else if (infoType === "track") {
        name = item?.name;
        description = item?.artists.map(artist => artist.name).join(", ");
        image = item?.album.images[1]?.url;
    } 
    else if (infoType === "artist") {
        name = item?.name;
        description = item?.genres.join(", ");
        image = item?.images[1]?.url;
    }
    else if (infoType === "album") {
        name = item?.name;
        description = item?.artists.map(artist => artist.name).join(", ");
        image = item?.images[1]?.url;
    }
    else if (infoType === "playlist") {
        name = item?.name;
        description = item?.description;
        image = item?.images[0]?.url;
    }
    else {
        name = "No name";
        description = "No artist or genre";
        image = "";
        itemUri = "";
    }


    return (
        <div className= "track" key= {index}>
            <img src= {image} alt= {infoType} />
            <div className= "track-data">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <div className= "play-button" onClick={ () => playTrack(false, 0, itemUri)}>
                <FontAwesomeIcon icon="fa-solid fa-play" />
            </div>
        </div>
    )
}

export default AlbumCard