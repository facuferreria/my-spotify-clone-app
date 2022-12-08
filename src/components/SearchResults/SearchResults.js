import React from 'react'
import MusicSections from '../MusicSections/MusicSections'

function SearchResults({data, category, title, inputValue}) {
  return (
    <div>
        {inputValue !== "" && <MusicSections data = {data} category = {category} title = {title} /> }
    </div>
  )
}

export default SearchResults