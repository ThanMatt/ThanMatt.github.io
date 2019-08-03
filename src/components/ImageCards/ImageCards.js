import React from 'react';
import '../../assets/css/card.css';

const ImageCards = props => {
  const igPicURL = `https://instagram.com/p/${props.photo.id}`
  return (
    <a href={igPicURL} target="_blank" rel="noopener noreferrer">
      <div className="card" id="ig-card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={props.photo.original} id="img" alt={props.photo.caption} />
          </figure>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <div className="media-content">
                  <p className="title is-5">{props.photo.caption ? props.photo.caption : 'Untitled'}</p>
                  <p className="subtitle is-6">@{props.photo.username}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

export default ImageCards;