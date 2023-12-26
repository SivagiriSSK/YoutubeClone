import PropTypes from 'prop-types';

const LatestVideo = (props) => {
  // receiving data from parent comp in props
  // props are objects
  // props are read-only
  // props can have children
  // props are used for receiving data from parent comp
  console.log(props);
  return (
    <div className="card">
      <img
        src={props.thumbnailUrl}
        className="card-img-top"
        alt={props.title}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.children}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.channel}</li>
        <li className="list-group-item">
          {props.views} Views | {props.publishedDate}
        </li>
      </ul>
    </div>
  );
};

LatestVideo.propTypes = {
  thumbnailUrl: PropTypes.string,
  title: PropTypes.string,
  channel: PropTypes.string,
  views: PropTypes.string,
  publishedDate: PropTypes.string,
  children: PropTypes.string
};

export default LatestVideo;
