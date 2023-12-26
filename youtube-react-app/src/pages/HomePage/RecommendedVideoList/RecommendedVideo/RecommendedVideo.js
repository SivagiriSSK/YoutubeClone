import React from 'react';
import PropTypes from 'prop-types';

const RecommendedVideo = ({
  title,
  thumbnailUrl,
  description,
  channel,
  views,
  publishedDate,
  handleWatchList,
  isInWatchlist,
  index
}) => {
  return (
    <div className="col-md-3">
      <div className="card">
        <img src={thumbnailUrl} className="card-img-top" alt={title} />

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">{channel}</li>
          <li className="list-group-item">
            {views} Views | {publishedDate}
          </li>

          <li className="list-group-item">
            <button
              type="button"
              className="btn btn-success btn-sm"
              onClick={handleWatchList.bind(this, index)}
            >
              {isInWatchlist ? 'In Watchlist' : 'Add to Watchlist'}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

RecommendedVideo.propTypes = {
  isInWatchlist: PropTypes.bool,
  thumbnailUrl: PropTypes.string,
  title: PropTypes.string,
  channel: PropTypes.string,
  views: PropTypes.string,
  publishedDate: PropTypes.string,
  description: PropTypes.string,
  handleWatchList: PropTypes.func,
  index: PropTypes.number
};

export default RecommendedVideo;
