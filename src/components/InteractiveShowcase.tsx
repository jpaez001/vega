import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';

// The DisplayButton component remains the same
const DisplayButton = ({ state }: { state: string }) => {
  const getButtonClassName = () => {
    const baseClasses = 'h-14 px-4 gap-2 inline-flex items-center justify-center rounded-lg font-normal text-white transition-all duration-200';
    switch (state) {
      case 'hover':
        return `${baseClasses} bg-[#373AE5]`;
      case 'pressed':
        return `${baseClasses} bg-[#1B1D88] scale-[.98]`;
      case 'focused':
        return `${baseClasses} bg-[linear-gradient(225deg,_#373AE5_14.64%,_#3D2CB6)] ring-2 ring-offset-2 ring-blue-500`;
      case 'disabled':
        return `${baseClasses} bg-gray-300 text-gray-500 cursor-not-allowed`;
      default:
        return `${baseClasses} bg-[linear-gradient(225deg,_#373AE5_14.64%,_#3D2CB6)]`;
    }
  };

  return (
    <div className={getButtonClassName()}>
      <span>Button Label</span>
    </div>
  );
};


export const InteractiveShowcase = () => {
  const states = ['default', 'hover', 'focused', 'pressed', 'disabled'];
  const [currentState, setCurrentState] = useState('default');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let intervalId: number | undefined;
    if (isAnimating) {
      intervalId = window.setInterval(() => {
        setCurrentState(prevState => {
          const currentIndex = states.indexOf(prevState);
          const nextIndex = (currentIndex + 1) % states.length;
          return states[nextIndex];
        });
      }, 1200);
    }
    return () => clearInterval(intervalId);
  }, [isAnimating, states]);

  return (
    <div className="w-full max-w-2xl p-8 md:p-12 bg-white rounded-2xl shadow-lg text-center font-sans">
      <h2 className="text-2xl font-bold mb-2">Interactive Button State Demo</h2>
      <p className="text-gray-600 mb-8">Click the buttons below or use "Animate States" to see them in action.</p>
      
      <div className="mb-10 h-14 flex justify-center items-center">
        <DisplayButton state={currentState} />
      </div>

      <div className="flex justify-center gap-2 flex-wrap mb-6">
        {states.map(state => (
          // THIS IS THE UPDATED LOGIC - IT'S MUCH CLEANER NOW
          <Button
            key={state}
            label={state.charAt(0).toUpperCase() + state.slice(1)}
            variant="secondary" // We explicitly use our new secondary variant
            size="medium"
            // We only override the class for the active state
            className={currentState === state ? '!bg-black !text-white' : ''}
            onClick={() => { setIsAnimating(false); setCurrentState(state); }}
          />
        ))}
      </div>
      
      <Button 
        label={isAnimating ? 'Stop Animation' : 'Animate All States'}
        variant="secondary" // Use the secondary variant here too
        size="medium"
        onClick={() => setIsAnimating(prev => !prev)} 
      />

      <div className="mt-6">
        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-normal">
          Current State: {currentState}
        </span>
      </div>
    </div>
  );
};