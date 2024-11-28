// File: src/components/ConstitutionPage.js
import React from 'react';
import { motion } from 'framer-motion';
import './constidetail.css';

const articles = [
  { title: 'Article 1', description: 'India, that is Bharat, shall be a Union of States.' },
  { title: 'Article 14', description: 'Equality before the law and equal protection of laws.' },
  { title: 'Article 19', description: 'Right to freedom of speech and expression.' },
  { title: 'Article 21', description: 'Protection of life and personal liberty.' },
  { title: 'Article 51A', description: 'Fundamental duties of every citizen.' },
];

const ConstitutionPage = () => {
  const handleGameLink = () => {
    window.location.href = '/game'; // Update path as needed
  };

  return (
    <div className="constitution-page">
      {/* Animated Title */}
      <motion.h1
        className="page-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Constitution of India
      </motion.h1>

      {/* Description */}
      <motion.p
        className="description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        The Constitution of India is the supreme law of the land. It establishes the framework for governance and guarantees fundamental rights to all citizens.
      </motion.p>

      {/* Two-Column Articles Section */}
      <div className="articles-section">
        {articles.map((article, index) => (
          <motion.div
            className="article-row"
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
          >
            <div className="article-title">{article.title}</div>
            <div className="article-description">{article.description}</div>
          </motion.div>
        ))}
      </div>

      {/* Video Section */}
      <motion.div
        className="video-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/VIDEO_ID"
          title="Constitution of India"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </motion.div>

      {/* Game Button */}
      <motion.button
        className="game-button"
        onClick={handleGameLink}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Play Game
      </motion.button>
    </div>
  );
};

export default ConstitutionPage;
