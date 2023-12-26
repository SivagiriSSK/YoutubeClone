import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './VideoPlayer.scss';
import SuggestedVideoList from '../SuggestedVideoList/SuggestedVideoList';
import CommentList from '../CommentList/CommentList';

const VideoPlayer = () => {
  const [likeCount, setLikeCount] = useState(75);
  function handleLikeCount() {
    setLikeCount(likeCount + 1);
  }

  return (
    <div className='grid-wrapper'>
      <div>
        <video className='main-video' controls autoPlay>
          <source src='./assets/videos/meta-video.mp4' type='video/mp4' />
        </video>
        <p className='video-title'>Amazon Wildlife In 4K - Animals That Call The Jungle Home</p>

        <div className='video-meta'>
          <div className='button-group'>
            <div>
              <img
                className='channel-logo'
                src='./assets/images/apple-logo.png'
                alt='National Geographic'
              />
              <p className='channel-info'>
                <a href='#' className='channel-name'>
                  National Geographic <FontAwesomeIcon icon='fa-solid fa-circle-check' />
                </a>
                <span>265K subscribers</span>
              </p>
            </div>

            <div>
              <button type='button' className='subscribe-btn'>
                Subscribe
              </button>
            </div>

            <div>
              <button type='button' className='btn-thumbsup btn-margin ' onClick={handleLikeCount}>
                <FontAwesomeIcon className='icon-styles ' icon='fa-solid fa-thumbs-up' />{' '}
                <span>{likeCount}</span>K
              </button>
              <button type='button' className='btn-thumbsdown btn-margin '>
                <FontAwesomeIcon className='icon-styles' icon='fa-solid fa-thumbs-down' />
              </button>
              <button type='button' className='btn-share btn-margin '>
                <FontAwesomeIcon className='icon-styles' icon='fa-regular fa-share-from-square' />{' '}
                Share
              </button>
              <button type='button' className='btn-download btn-margin '>
                <FontAwesomeIcon className='icon-styles' icon='fa-solid fa-download' />
                Download
              </button>
              <button type='button' className='btn-more btn-margin '>
                <FontAwesomeIcon className='icon-styles' icon='fa-solid fa-ellipsis-vertical' />
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className='channel-description'>
            <p className='video-explanation'>
              <span>
                <span> 1M views </span>
                <span> 2 Weeks ago </span>
                <span> | 5 Tips for Building Trust with Content Marketing </span>
              </span>
              <span>
                Establish your company as an expert and an industrial leader by incorporating this
                type of content on your site or landing pages.
              </span>
              <span id='AboutVideo'>
                Establish your company as an expert and an industrial leader by incorporating this
                type of content on your site or landing pages.
              </span>
            </p>
          </div>
          <div className='video-comments'>
            <div>
              <span>317 Comments</span>
              <span>
                <FontAwesomeIcon className='icon-styles' icon='fa-solid fa-align-left' /> Sort by
              </span>
            </div>
          </div>
          <div className='public-review'>
            <button type='button' id='commentIcon'>
              <FontAwesomeIcon className='icon-styles' icon='fa-solid fa-user' />
            </button>
            <input type='text' id='commentInputField' placeholder=' Add a comment...' />
          </div>
        </div>

        <div className='video-description'>
          <div className='user-comments'>
            <CommentList />
          </div>
        </div>
      </div>

      <div className='suggested-videos'>
        <SuggestedVideoList />
      </div>
    </div>
  );
};

export default VideoPlayer;
