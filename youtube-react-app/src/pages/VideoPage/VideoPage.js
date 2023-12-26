import React from 'react';
import HelmetSetup from '../../components/HelmetSetup/HelmetSetup';
import VideoPlayer from './VideoPlayer/VideoPlayer';

const VideoPage = () => {
  return (
    <>
      <HelmetSetup title='Video' />
      <VideoPlayer />
    </>
  );
};

export default VideoPage;
