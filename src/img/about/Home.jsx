import React from 'react';

const Home = ({color}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill={color} d="M12,3L20,9V21H15V14H9V21H4V9L12,3Z" />
    </svg>
  );
};

export default Home;