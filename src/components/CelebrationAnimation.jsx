import React, { useMemo } from 'react';

const CelebrationAnimation = () => {
  const balloons = useMemo(() =>
    Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 95}%`, // Keep balloons within the viewport
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${10 + Math.random() * 10}s`,
      color: [
        'bg-red-400',
        'bg-blue-400',
        'bg-green-400',
        'bg-yellow-400',
        'bg-pink-400',
        'bg-purple-400',
        'bg-orange-400'
      ][Math.floor(Math.random() * 7)],
    }))
  , []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {balloons.map(b => (
        <div
          key={b.id}
          className={`balloon ${b.color} border-current`}
          style={{
            left: b.left,
            animationDelay: b.animationDelay,
            animationDuration: b.animationDuration,
          }}
        />
      ))}
    </div>
  );
};

export default CelebrationAnimation;
