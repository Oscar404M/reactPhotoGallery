import React from 'react'
import { saveAs } from 'file-saver';


const Photo = ({urls: {full}, alt_description, likes, user: {name, portfolio_url,  profile_image : {medium} }}) => {

 const download = (url,alt) => {
  saveAs(url, `${alt}.jpg`)
 }  
  return <button onDoubleClick={() => download(full, name)}>
  <article className='photo'>
    <img src={full} alt={alt_description} />
    <div className="photo-info">
      <div>
        <h4>{name}</h4>
        <p>{likes}</p>
      </div>
      <a href={portfolio_url} target="_blank" rel="noopener noreferrer">
        <img src={medium} alt={name} className='user-image' />
      </a>
    </div>
  </article>
  </button>
}

export default Photo
