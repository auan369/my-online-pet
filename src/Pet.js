import React, { useState, useEffect } from 'react';
import pico from './images/pixil-layer-Layer 1.png';
import picoSad from './images/pixil-layer-Sad.png';
import picoHungry from './images/pixil-layer-hungry.png';

function Pet() {
  const [hunger, setHunger] = useState(50);
  const [happiness, setHappiness] = useState(50);

  // Game loop - decrease happiness and increase hunger over time
  useEffect(() => {
    const interval = setInterval(() => {
      setHunger(hunger => Math.min(100, hunger + 1));  // Hunger increases
      setHappiness(happiness => Math.max(0, happiness - 1)); // Happiness decreases
    }, 500);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Handle feeding the Pet
  const feedPet = () => {
    setHunger(hunger => Math.max(0, hunger - 10));
  };

  // Handle playing with the Pet
  const playPet = () => {
    setHappiness(happiness => Math.min(100, happiness + 10));
  };

  // Render the pet's emotion based on hunger and happiness
  const getEmotion = () => {
    if (hunger >= 100) return picoHungry;
    if (happiness <= 0) return picoSad;
    return pico;
  };

  return (
    <div>
      {/* <div className="pet">{getEmotion()}</div> */}
      <img src={getEmotion()} className = "pico" alt="logo" />
      <div className="stats">
        Hunger: {hunger}/100 <br />
        Happiness: {happiness}/100
      </div>
      <div className="controls">
        <button onClick={feedPet}>Feed</button>
        <button onClick={playPet}>Play</button>
      </div>
    </div>
  );
}

export default Pet;
