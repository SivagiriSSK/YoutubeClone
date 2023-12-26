import { Component } from 'react';
import RecommendedVideo from './RecommendedVideo/RecommendedVideo';

class RecommendedVideoList extends Component {
  constructor () {
    super();
    // comp-wide data
    this.state = {
      videos: [
        {
          id: 57688797,
          title: 'Ind Vs Aus Cricket 2023',
          description: 'Enjoy watching Cricket Series between Ind and Aus',
          thumbnailUrl:
            'https://plchldr.co/i/300x200?&bg=0000ff&fc=000000&text=IndVsAus Cricket',
          channel: 'Hotstar',
          views: '1M',
          publishedDate: '1 month ago',
          isInWatchlist: false
        },
        {
          id: 87579763,
          title: 'Top 10 Goals of Messi',
          description: 'Enjoy watching 10 best goals of Messi',
          thumbnailUrl:
            'https://plchldr.co/i/300x200?&bg=ff0000&fc=000000&text=Top 10 Goals of Messi',
          channel: 'FIFA',
          views: '1M',
          publishedDate: '1 month ago',
          isInWatchlist: false
        },
        {
          id: 764546,
          title: 'Ambani',
          description: 'Enjoy watching acheivements of Ambani',
          thumbnailUrl:
            'https://plchldr.co/i/300x200?&bg=00ff00&fc=000000&text=Ambani',
          channel: 'Mukesh',
          views: '4M',
          publishedDate: '2 month ago',
          isInWatchlist: false
        },
        {
          id: 7645468,
          title: 'Bill gates',
          description: 'Enjoy watching  acheivements of Bill gates',
          thumbnailUrl:
            'https://plchldr.co/i/300x200?&bg=00ff00&fc=000000&text=Bill gates',
          channel: 'BillGates',
          views: '4M',
          publishedDate: '2 month ago',
          isInWatchlist: false
        }
      ]
    };
  }

  handleWatchList = (index) => {
    console.log(this);
    // Do not mutate state directly. Use setState().
    // working with state immutably
    const duplicateVideos = [...this.state.videos];
    duplicateVideos[index].isInWatchlist =
      !duplicateVideos[index].isInWatchlist;

    this.setState({
      videos: duplicateVideos
    });
  };

  render () {
    // Conditional Rendering
    if (!Array.isArray(this.state.videos) || this.state.videos.length === 0) {
      return (
        <div className="alert alert-warning">
          Sorry! Unable to fetch Recommended Videos. Try again later!
        </div>
      );
    }

    // all component-specific transformations can be done here
    // loop-thru
    return (
      <div className="row">
        {this.state.videos.map((video, index) => {
          return (
            <RecommendedVideo
              key={video.id}
              {...video}
              handleWatchList={this.handleWatchList}
              index={index}
            />
          );
        })}
      </div>
    );
  }
}

export default RecommendedVideoList;
