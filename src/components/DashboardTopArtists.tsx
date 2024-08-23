import React from 'react'
import '../styles/containers/auxcontainer.css'
import { ITopArtist } from '../containers/AuxContainer'

const DashboardTopArtists = ({ id, name, image} : ITopArtist) => {
  return (
    <div className='artist-card'>
        <img className='artist-img' src={image} alt={name} />
        <h4 className='artist-name'>{name}</h4>
    </div>
  )
}

export default DashboardTopArtists