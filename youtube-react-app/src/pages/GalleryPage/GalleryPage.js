import React from 'react';
import HelmetSetup from '../../components/HelmetSetup/HelmetSetup';
import Gallery from './Gallery/Gallery';

const GalleryPage = () => {
  console.log('Gallerypage inside!');
  const videos = [
    {
      id: 1,
      title: 'Ind vs Aus Cricket Highlights ',
      thumbnailUrl: './assets/images/apple-logo.png',
      channel: 'Cricinfo',
      publishedDate: '10 days ago',
      views: '6.5M',
      description: 'Watch Ind vs Aus Cricket Highlights'
    },
    {
      id: 2,
      title: 'Ind vs Aus Cricket Highlights ',
      thumbnailUrl: './assets/images/audi-logo.png',
      channel: 'Cricinfo',
      publishedDate: '10 days ago',
      views: '6.5M',
      description: 'Watch Ind vs Aus Cricket Highlights'
    },
    {
      id: 3,
      title: 'Ind vs Aus Cricket Highlights ',
      thumbnailUrl: './assets/images/nike-logo.png',
      channel: 'Cricinfo',
      publishedDate: '10 days ago',
      views: '6.5M',
      description: 'Watch Ind vs Aus Cricket Highlights'
    },
    {
      id: 4,
      title: 'Ind vs Aus Cricket Highlights ',
      thumbnailUrl: './assets/images/netflix-logo.png',
      channel: 'Cricinfo',
      publishedDate: '10 days ago',
      views: '6.5M',
      description: 'Watch Ind vs Aus Cricket Highlights'
    },
    {
      id: 5,
      title: 'Ind vs Aus Cricket Highlights ',
      thumbnailUrl: './assets/images/spotify-logo.png',
      channel: 'Cricinfo',
      publishedDate: '10 days ago',
      views: '6.5M',
      description: 'Watch Ind vs Aus Cricket Highlights'
    },
    {
      id: 6,
      title: 'Ind vs Aus Cricket Highlights ',
      thumbnailUrl: './assets/images/starbucks-logo.png',
      channel: 'Cricinfo',
      publishedDate: '10 days ago',
      views: '6.5M',
      description: 'Watch Ind vs Aus Cricket Highlights'
    },
    {
      id: 7,
      title: 'Ind vs Aus Cricket Highlights ',
      thumbnailUrl: './assets/images/nike-logo.png',
      channel: 'Cricinfo',
      publishedDate: '10 days ago',
      views: '6.5M',
      description: 'Watch Ind vs Aus Cricket Highlights'
    },
    {
      id: 8,
      title: 'Ind vs Aus Cricket Highlights ',
      thumbnailUrl: './assets/images/apple-logo.png',
      channel: 'Cricinfo',
      publishedDate: '10 days ago',
      views: '6.5M',
      description: 'Watch Ind vs Aus Cricket Highlights'
    }
  ];

  return (
    <>
      <HelmetSetup title='Gallery' />

      <div className='row'>
        {videos.map((video) => {
          return (
            <div className='col-md-3 pt-3' key={video.id}>
              <Gallery {...video}></Gallery>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GalleryPage;
