import React from 'react';
import Comment from './Comment/Comment';

const CommentList = () => {
  const comments = [
    {
      id: 1,
      thumbnailUrl: './assets/images/netflix-logo.png',
      userName: '@Sivagiri S',
      postedDate: '12 months ago',
      feedback:
        'Thank you very much Mash. This course is very well thought out and has a really high quality',
      likes: '2.4K'
    },
    {
      id: 2,
      thumbnailUrl: './assets/images/apple-logo.png',
      userName: '@Rahul M',
      postedDate: '12 months ago',
      feedback:
        'Thank you very much Mash. This course is very well thought out and has a really high quality',
      likes: '5.2K'
    },
    {
      id: 3,
      thumbnailUrl: './assets/images/starbucks-logo.png',
      userName: '@Shiva R',
      postedDate: '12 months ago',
      feedback:
        'Thank you very much Mash. This course is very well thought out and has a really high quality',
      likes: '224'
    },
    {
      id: 4,
      thumbnailUrl: './assets/images/spotify-logo.png',
      userName: '@Sivagiri S',
      postedDate: '12 months ago',
      feedback:
        'Thank you very much Mash. This course is very well thought out and has a really high quality',
      likes: '3.2K'
    },
    {
      id: 5,
      thumbnailUrl: './assets/images/audi-logo.png',
      userName: '@Rahul R',
      postedDate: '12 months ago',
      feedback:
        'Thank you very much Mash. This course is very well thought out and has a really high quality',
      likes: '24'
    }
  ];

  return (
    <div>
      {comments.map((comment) => {
        console.log(comment);
        return <Comment key={comment.id} {...comment} />;
      })}
    </div>
  );
};

export default CommentList;
