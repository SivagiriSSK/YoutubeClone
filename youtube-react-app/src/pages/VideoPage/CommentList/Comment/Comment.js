import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

const Comment = ({ thumbnailUrl, userName, postedDate, feedback, likes }) => {
  console.log(thumbnailUrl, userName, postedDate, feedback, likes);
  return (
    <>
      <div className='public-comments'>
        <div>
          <a>
            <img className='user-logo' src={thumbnailUrl} alt='spotify-logo' />
          </a>
        </div>
        <div>
          <span>{userName}</span>
          <span className='posted-date'>{postedDate}</span>
          <span className='user-feedback'>{feedback}</span>
        </div>
      </div>
      <div className='comment-buttons'>
        <button className='like-button' type='button'>
          <FontAwesomeIcon className='icon-styles' icon='fa-solid fa-thumbs-up' />
        </button>
        <span className='comment-likes'>{likes}</span>
        <button className='dislike-button' type='button'>
          <FontAwesomeIcon className='icon-styles' icon='fa-solid fa-thumbs-down' />
        </button>
        <button className='reply-button' type='button'>
          Reply
        </button>
      </div>
    </>
  );
};

Comment.propTypes = {
  thumbnailUrl: PropTypes.string,
  userName: PropTypes.string,
  postedDate: PropTypes.string,
  feedback: PropTypes.string,
  likes: PropTypes.string
};

export default Comment;
