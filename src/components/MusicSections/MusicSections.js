import React from 'react'
import AlbumCard from '../AlbumCard/AlbumCard';

function MusicSections({category, data, title}) {

    return (   
        <div className= "body-option">
            <span className= "section-title">{title}</span>
            <div>
                {
                    data?.items.map((item, index) => {
                        return (
                            <AlbumCard
                                key = {index} 
                                index = {item.id}
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