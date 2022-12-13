import React from 'react'
import MusicSections from '../MusicSections/MusicSections'

function SearchResults({data, category, title}) {
  return (
    <div>
        { (data) && data?.items.length !== 0 && <MusicSections data = {data} category = {category} title = {title} /> }
    </div>
  )
}

export default SearchResults