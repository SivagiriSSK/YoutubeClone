import React, { useEffect, useState } from 'react';

const Posts = () => {
  const [postList, setPostList] = useState([]);

  // REST API URL: https://jsonplaceholder.typicode.com/posts?_limit=6
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
      .then((res) => {
        return res.json();
      })
      .then((resInJson) => {
        setPostList(resInJson);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  }, []);

  return (
    <div className='row'>
      <h2 className='mt-4'>Posts | Demo of Spy</h2>
      {postList?.map((post) => {
        return (
          <div className='col-md-3 mb-4 mt-4' key={post.id}>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>{post.title}</h5>
                <p className='card-text'>{post.body}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
