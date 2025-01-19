import React, { useState, useEffect } from 'react';
import '../App.css'; // Add styles for the modal

const StoryModal = ({ group, onClose }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = group.slides.sort((a, b) => a.order - b.order);

  const handleNext = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else {
      onClose(); // Close modal when all slides are viewed
    }
  };

  const handlePrevious = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  const togglePlayPause = () => {
    setIsPaused(!isPaused); // Toggle play/pause
  };

  useEffect(() => {
    if (!isPaused) {
      const timer = setTimeout(handleNext, 5000); // Auto-advance every 5 seconds
      return () => clearTimeout(timer); // Clean up timer
    }
  }, [currentSlideIndex, isPaused]);

  return (
    
    <div className="story-modal">
     
      {/* Close Button */}
 <button className="close-button" onClick={onClose}>
    ✕
  </button>
   
    {/* Controls */}
  <div className="modal-overlay" onClick={onClose}></div>
  <div className="modal-content">
   
  <button className="play-pause-button" onClick={togglePlayPause}>
    {isPaused ? '▶' : '❙❙'}
  </button>
{/* Header Section */}
<div className="story-header">
  <div className="profile-section">
    <img src={group.thumbnail} alt="Profile" className="profile-picture" />
    <p className="story-title">{group.name}</p>
  </div>
  </div>
    {/* Progress Bars */}
    <div className="progress-bars">
      {slides.map((_, index) => (
        <div
          key={index}
          className={`progress-bar ${index <= currentSlideIndex ? 'active' : ''}`}
          style={{
            width: `${100 / slides.length}%`,
            animationDuration: index === currentSlideIndex && !isPaused ? '5s' : '0s',
          }}
        ></div>
      ))}
    </div>

    {/* Slide Content */}
    <div className="slide">
      <img src={slides[currentSlideIndex].image} alt={`Slide ${currentSlideIndex}`} />
      {slides[currentSlideIndex].button_text && (
        <a
          href={slides[currentSlideIndex].link}
          className="story-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          {slides[currentSlideIndex].button_text}
        </a>
      )}
    </div>

    <div className="controls">
      <button className="control-button" onClick={handlePrevious}>❮</button>
      <button className="control-button" onClick={handleNext}>❯</button>
    </div>

    {/* Play/Pause Button
    <button className="play-pause-button" onClick={togglePlayPause}>
  {isPaused ? '▶' : '❙❙'}
</button> */}
  </div>
</div>
  );
};

export default StoryModal;
