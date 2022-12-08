import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './AlbumCard.scss'

function AlbumCard({ index, infoType, item}) {

    let image, name, genreOrArtist;
    
    if (infoType === "recently_played") {
        name = item?.track.name;
        genreOrArtist = item?.track.artists.map(artist => artist.name).join(", ");
        image = item?.track.album.images[1].url;
    }
    else if (infoType === "track") {
        name = item?.name;
        genreOrArtist = item?.artists.map(artist => artist.name).join(", ");
        image = item?.album.images[1].url;
    } 
    else if (infoType === "artist") {
        name = item?.name;
        genreOrArtist = item?.genres.join(", ");
        image = item?.images[1].url;
    }
    else if (infoType === "album") {
        name = item?.name;
        genreOrArtist = item?.artists.map(artist => artist.name).join(", ");
        image = item?.images[1].url;
    }
    else {
        name = "No name";
        genreOrArtist = "No artist or genre";
        image = "";
    }


    return (
        <div className= "track" key= {index}>
            <img src= {image} alt= {infoType} />
            <div className= "track-data">
                <h3>{name}</h3>
                <p>{genreOrArtist}</p>
            </div>
            <div className= "play-button">
                <FontAwesomeIcon icon="fa-solid fa-play" />
            </div>
        </div>
    )
}

export default AlbumCard