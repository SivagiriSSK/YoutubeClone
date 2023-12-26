import React from 'react';
import PropTypes from 'prop-types';

const TrendingVideo = ({
  thumbnailUrl,
  title,
  description,
  channel,
  viewsCount,
  publishedDate
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
            {viewsCount} views | {publishedDate}
          </li>
        </ul>
      </div>
    </div>
  );
};

TrendingVideo.propTypes = {
  thumbnailUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  channel: PropTypes.string,
  viewsCount: PropTypes.string,
  publishedDate: PropTypes.string
};

export default TrendingVideo;
