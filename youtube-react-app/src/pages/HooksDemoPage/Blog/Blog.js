import React, { useEffect, useState } from 'react';

const Blog = () => {
  console.log('1.Program Started');
  const [topicName, setTopicName] = useState('React Hooks Demo');
  const [PublishedDate, setPublishedDate] = useState(new Date());
  const [authorName, changeAuthorName] = useState('Raina');

  console.log('2. Before useEffect in Blog Component');
  // in useEffect hook, first param: effec callback. second param: dependency list
  useEffect(() => {
    // runs after initial rendering
    // and also called upon state change as well
    console.log('4. Inside useEffect');

    // this is alternative to lifecycle hooks (componentDidMount and componentDidUpdate)
    // this is the right place for your REST API Calls
    // you can update the state from here
    document.title = topicName + ' ' + authorName;
  }, [topicName, authorName]); // second argument is dependency. it is an array and --it is optional
  // if the dep is changed by any means, then the effect callback will be called
  // remove the dep and have empty array then see the difference

  const handleChangeTopic = () => {
    console.log('Inside handleChangeTopic');
    setTopicName('Demo of useEffect Hook and useState Hook');
  };

  const handleUpdatePublisedDate = () => {
    setPublishedDate(new Date());
  };

  const handleChangeAuthorName = (event) => {
    changeAuthorName(event.target.value);
  };

  console.log('3.Program Ended');
  return (
    <div>
      <h3>Blog</h3>
      <p>Topic Name: {topicName}</p>
      <button type='button' onClick={handleChangeTopic}>
        Change Topic
      </button>

      <p>Published Date: {PublishedDate.toString()}</p>
      <button type='button' onClick={handleUpdatePublisedDate}>
        Update Published Date
      </button>

      <p>Author Name : {authorName}</p>
      <input type={'text'} value={authorName} onChange={handleChangeAuthorName} />
    </div>
  );
};

export default Blog;
