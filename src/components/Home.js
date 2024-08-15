import React from 'react';
import articleImage from 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fimg.freepik.com%2Ffree-vector%2Flaptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg&sp=1723750426T6d0778786e0a5642259a77d239e73f2a7ce7115b9549757fe340724eda1261c6'; 

const Home = ({ articleTitle }) => {
  return (
    <div className="home">
      {articleTitle === 'first' ? (
        <div>
          <img src={articleImage} alt="Article" />
          <p>This is the article content with an image.</p>
          <a href="/article-link">Read more</a>
        </div>
      ) : articleTitle === 'second' ? (
        <p>This is just a paragraph with no image.</p>
      ) : (
        <p>No article to display.</p>
      )}
    </div>
  );
};

export default Home;
