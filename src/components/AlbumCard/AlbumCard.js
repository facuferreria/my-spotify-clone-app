import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './AlbumCard.scss'

function AlbumCard({ index, infoType, item}) {

    let image, name, isTrackOrArtistNames;
    
    if (infoType === "recently_played") {
        name = item?.track.name;
        isTrackOrArtistNames = item?.track.artists.map(artist => artist.name).join(", ");
        image = item?.track.album.images[1].url;
    }
    else if (infoType === "top_tracks") {
        name = item?.name;
        isTrackOrArtistNames = item?.artists.map(artist => artist.name).join(", ");
        image = item?.album.images[1].url;
    } else {
        name = item?.name;
        isTrackOrArtistNames = item?.genres.join(", ");
        image = item?.images[1].url;
    }

    return (
        <div className= "track" key= {index}>
            <img src= {image} alt= {infoType} />
            <div className= "track-data">
                <h3>{name}</h3>
                <p>{isTrackOrArtistNames}</p>
            </div>
            <div className= "play-button">
                <FontAwesomeIcon icon="fa-solid fa-play" />
            </div>
        </div>
    )
}

export default AlbumCard