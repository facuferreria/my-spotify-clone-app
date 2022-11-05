import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MusicSections({recently_played, top_tracks, top_artists}) {
  return (
    <div className= "main-body">
        <div className= "body-option">
            <span className= "see-more">Ver Todos</span>
            <FontAwesomeIcon icon={['fas', 'arrow-right']} />
            <div>
                {
                    //para mostrar la imagen e info del track
                    recently_played?.items.map((item, index) => {
                        return (
                            <div className= "track" key= {index}>
                                <img src= {item.track.album.images[1].url} alt= "recently played track"></img>
                                <div className= "track-data">
                                    <h3>{item.track.name}</h3>
                                    <p>{item.track.artists.map(artist => artist.name).join(", ")}</p>
                                </div>
                                
                            </div>
                        )
                    })
                    
                }
            </div>
        </div>
        <div className= "body-option">
            <span className= "see-more">Ver Todos</span>
            <FontAwesomeIcon icon={['fas', 'arrow-right']} />
            <div>
                {
                    //para mostrar la imagen e info del track
                top_tracks?.items.map((topArtist, index) => {
                        return (
                            <div className= "track" key= {index}>
                                <img src= {topArtist.album.images[1].url} alt= "recently played track"></img>
                                <div className= "track-data">
                                    <h3>{topArtist.name}</h3>
                                    <p>{topArtist.artists.map(artist => artist.name).join(", ")}</p>
                                </div>
                                
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className= "body-option">
            <span className= "see-more">Ver Todos</span>
            <FontAwesomeIcon icon={['fas', 'arrow-right']} />
            <div>
                {
                    //para mostrar la imagen e info del artista
                    top_artists?.items.map((topTrack, index) => {
                        return (
                            <div className= "track" key= {index}>
                                <img src= {topTrack.images[1].url} alt= "recently played track"></img>
                                <div className= "track-data">
                                    <h3>{topTrack.name}</h3>
                                    <p>{topTrack.genres.join(", ")}</p>
                                </div>
                                
                            </div>
                        )
                    })   
                }
            </div>
        </div>
</div>
  )
}

export default MusicSections