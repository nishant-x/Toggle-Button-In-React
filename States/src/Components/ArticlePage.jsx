import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import { motion } from 'framer-motion'; // For animations
import '../App.css'; // Make sure to create the required CSS

const ArticlePage = () => {
  return (
    <div className="article-page">
      <div className="content-container">
        <div className="article-description">
          <h1>Title of the Article</h1>
          <p>
            This is a brief description of the article. It highlights key aspects of the topic,
            explaining the importance and providing some context for the reader.
          </p>
        </div>
        <div className="video-container">
          <h2>Watch the Overview</h2>
          <video width="100%" controls>
            <source src="path/to/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <motion.div
        className="button-container"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to="/game-dashboard">
          <button className="go-button">Go to Game Dashboard</button>
        </Link>
      </motion.div>
    </div>
  );
};

export default ArticlePage;
