import React, { useState } from 'react';
import StoryGroup from "./StoryGroup"; 
import StoryModal from './StoryModal'; 
import '../App.css'; 

const Stories = ({ data }) => {
  const [activeGroup, setActiveGroup] = useState(null);

  const handleGroupClick = (group) => {
    setActiveGroup(group); 
  };

  const closeModal = () => {
    setActiveGroup(null); 
  };

  return (
    <div className="stories-container">
      {data.map((group) => (
        <StoryGroup key={group.id} group={group} onClick={() => handleGroupClick(group)} />
      ))}
      {activeGroup && <StoryModal group={activeGroup} onClose={closeModal} />}
    </div>
  );
};

export default Stories;
