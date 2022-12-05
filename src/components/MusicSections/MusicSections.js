import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import AlbumCard from '../AlbumCard/AlbumCard';

function MusicSections({category, data}) {

    return (   
        <div className= "body-option">
            <span className= "see-more">Ver Todos</span>
            <FontAwesomeIcon icon={['fas', 'arrow-right']} />
            <div>
                {
                    data?.items.map((item, index) => {
                        return (
                            <AlbumCard
                                index = {index} 
                                item = {item}
                                infoType = {category}
                            />
                        )
                    })            
                }
            </div>
        </div>
    )
}

export default MusicSections