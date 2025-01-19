import React from 'react';
import '../App.css'; // Add styles for story groups

const StoryGroup = ({ group, onClick }) => {
  return (
    <div className="story-group" onClick={onClick}>
      <div
        className="story-ring"
        style={{ borderColor: group.ringColor }} // Use dynamic ring color
      >
        <img src={group.thumbnail} alt={group.name} className="story-thumbnail" />
      </div>
      <p style={{ color: group.nameColor }} className="story-name">
        {group.name}
      </p>
    </div>
  );
};

export default StoryGroup;
