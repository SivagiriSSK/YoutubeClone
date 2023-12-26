import { Component } from 'react'; // importing core react library
import TrendingVideo from './TrendingVideo/TrendingVideo';

// class component also known as containers/smart comp/ stateful component
class TrendingVideoList extends Component {
  // comp-wide data
  // state is an object
  state = {
    videoResolution: '4K',
    videos: [
      {
        id: 121231,
        title: 'Man Vs Wild',
        description:
          'Adventure TV Show by Bear Grylls | Watch it on Discovery TV',
        thumbnailUrl:
          'https://plchldr.co/i/300x200?&bg=0000ff&fc=ffffff&text=ManVsWild',
        channel: 'Discovery TV',
        viewsCount: '1M',
        publishedDate: '4 days ago'
      },
      {
        id: 7856786,
        title: 'Planet Earth II',
        description: 'Fanstastic Planet Earth | Watch it on BBC Earth',
        thumbnailUrl:
          'https://plchldr.co/i/300x200?&bg=ffff00&fc=000000&text=PlanetEarthII',
        channel: 'BBC Earth',
        viewsCount: '2M',
        publishedDate: '10 days ago'
      }
    ]
  };

  handleChangeResolution = () => {
    // within arrow fn -- 'this' keyword will be available
    // lets update the state data
    console.log('clicked');
    // this.state.videoResolution = "8K"; // Do not mutate state directly. Use setState().
    this.setState({
      videoResolution: '8K'
    });
    // whenever setState is called -- render() method will be executed
    // setState will smartly merge the change with existing properties
  };

  // must have render method
  render () {
    console.log(this.state);
    console.log('Inside Render');
    // must return JSX
    return (
      <div className="row">
        <p>
          Enjoy the Trending Videos in Stunning {this.state.videoResolution}{' '}
          Resolution
          <button
            type="button"
            className="btn btn-primary btn-sm ms-2"
            onClick={this.handleChangeResolution}
          >
            Change Resolution
          </button>
        </p>

        {this.state.videos.map((video) => {
          return <TrendingVideo key={video.id} {...video} />;
        })}

        {/*
        <div className="col-md-3">
          <div className="card">
            <img
              src={this.state.videos[0].thumbnailUrl}
              className="card-img-top"
              alt={this.state.videos[0].title}
            />
            <div className="card-body">
              <h5 className="card-title">{this.state.videos[0].title}</h5>
              <p className="card-text">{this.state.videos[0].description}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                {this.state.videos[0].channel}
              </li>
              <li className="list-group-item">
                {this.state.videos[0].views} Views |{" "}
                {this.state.videos[0].publishedDate} days ago
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img
              src={this.state.videos[1].thumbnailUrl}
              className="card-img-top"
              alt={this.state.videos[1].title}
            />
            <div className="card-body">
              <h5 className="card-title">{this.state.videos[1].title}</h5>
              <p className="card-text">{this.state.videos[1].description}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                {this.state.videos[1].channel}
              </li>
              <li className="list-group-item">
                {this.state.videos[1].views} Views |{" "}
                {this.state.videos[1].publishedDate} days ago
              </li>
            </ul>
          </div>
        </div>
          */}
      </div>
    );
  }
}

export default TrendingVideoList;
