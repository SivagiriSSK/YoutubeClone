import React from 'react';
import PropTypes from 'prop-types';
import './SuggestedVideo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SuggestedVideo = ({ thumbnailUrl, channel, title, views, publishedDate }) => {
  console.log('Suggested Video Inside!');
  return (
    <div className='aside-video'>
      <div className='suggested-video'>
        <a href='#'>
          <video>
            <source src={thumbnailUrl} type='video/mp4' />
          </video>
        </a>
        <div className='video-info'>
          <h2 className='channel-title'>{title} </h2>
          <p>
            <a href='#'>
              {channel} <FontAwesomeIcon icon='fa-solid fa-circle-check' />
            </a>
          </p>
          <p>
            <span>{views}</span>
            <span> .{publishedDate}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

SuggestedVideo.propTypes = {
  thumbnailUrl: PropTypes.string,
  channel: PropTypes.string,
  title: PropTypes.string,
  views: PropTypes.string,
  publishedDate: PropTypes.string
};

export default SuggestedVideo;
