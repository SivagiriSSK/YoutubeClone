import React from 'react';
import SuggestedVideo from './SuggestedVideo/SuggestedVideo';

const SuggestedVideoList = () => {
  console.log('SuggestedVideoList Inside');
  const videos = [
    {
      id: 1,
      title: 'Amazon Wildlife Animals That Call The Jungle Home | Amazon Rainforest',
      thumbnailUrl: './assets/videos/learning-video.mp4',
      channel: 'Channel S',
      views: '1M views',
      publishedDate: '2 Weeks ago'
    },
    {
      id: 2,
      title: 'Horizon View in Nature Morning | 4k Video HD Ultra',
      thumbnailUrl: './assets/videos/nature-video.mp4',
      channel: 'Channel N',
      views: '2M views',
      publishedDate: '4 Weeks ago'
    },
    {
      id: 3,
      title: 'Best Compilation of Sunsets and Time Lapse of Sky Views',
      thumbnailUrl: './assets/videos/trust-video.mp4',
      channel: 'Channel Z',
      views: '6M views',
      publishedDate: '2 Weeks ago'
    },
    {
      id: 4,
      title: 'Learn React JS with Project in 2 Hours | React Tutorial for Beginners',
      thumbnailUrl: './assets/videos/nature-video.mp4',
      channel: 'Channel L',
      views: '3M views',
      publishedDate: '8 Weeks ago'
    },
    {
      id: 5,
      title: 'Amazon Wildlife Animals That Call The Jungle Home | Amazon Rainforest',
      thumbnailUrl: './assets/videos/learning-video.mp4',
      channel: 'Channel S',
      views: '1M views',
      publishedDate: '2 Weeks ago'
    },
    {
      id: 6,
      title: 'Horizon View in Nature Morning | 4k Video HD Ultra',
      thumbnailUrl: './assets/videos/trust-video.mp4',
      channel: 'Channel N',
      views: '2M views',
      publishedDate: '4 Weeks ago'
    },
    {
      id: 7,
      title: 'Best Compilation of Sunsets and Time Lapse of Sky Views',
      thumbnailUrl: './assets/videos/learning-video.mp4',
      channel: 'Channel Z',
      views: '6M views',
      publishedDate: '2 Weeks ago'
    },
    {
      id: 8,
      title: 'Learn React JS with Project in 2 Hours | React Tutorial for Beginners',
      thumbnailUrl: './assets/videos/learning-video.mp4',
      channel: 'Channel L',
      views: '3M views',
      publishedDate: '8 Weeks ago'
    },
    {
      id: 9,
      title: 'Amazon Wildlife Animals That Call The Jungle Home | Amazon Rainforest',
      thumbnailUrl: './assets/videos/learning-video.mp4',
      channel: 'Channel S',
      views: '1M views',
      publishedDate: '2 Weeks ago'
    },
    {
      id: 10,
      title: 'Horizon View in Nature Morning | 4k Video HD Ultra',
      thumbnailUrl: './assets/videos/learning-video.mp4',
      channel: 'Channel N',
      views: '2M views',
      publishedDate: '4 Weeks ago'
    },
    {
      id: 11,
      title: 'Best Compilation of Sunsets and Time Lapse of Sky Views',
      thumbnailUrl: './assets/videos/learning-video.mp4',
      channel: 'Channel Z',
      views: '6M views',
      publishedDate: '2 Weeks ago'
    }
  ];

  return (
    <div>
      {videos.map((video) => {
        return (
          <div key={video.id}>
            <SuggestedVideo {...video}></SuggestedVideo>
          </div>
        );
      })}
    </div>
  );
};

export default SuggestedVideoList;
