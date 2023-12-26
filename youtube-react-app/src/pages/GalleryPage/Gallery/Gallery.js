import React from 'react';
import PropTypes from 'prop-types';

const Gallery = ({ thumbnailUrl, title, channel, views, publishedDate, description }) => {
  console.log('Inside Gallery');
  console.log(thumbnailUrl, title);
  return (
    <div className='card'>
      <img src={thumbnailUrl} className='card-img-top' alt={title} />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text mt-3 h6'>{description}</p>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>{channel}</li>
        <li className='list-group-item'>
          {views} Views | {publishedDate}
        </li>
      </ul>
    </div>
  );
};

Gallery.propTypes = {
  thumbnailUrl: PropTypes.string,
  title: PropTypes.string,
  channel: PropTypes.string,
  views: PropTypes.string,
  publishedDate: PropTypes.string,
  description: PropTypes.string
};

export default Gallery;
