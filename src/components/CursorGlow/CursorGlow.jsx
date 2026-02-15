import { useEffect, useState } from 'react';

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setPosition(newPos);
      setIsActive(true);

      // Trail effect
      setTrail(prev => {
        const newTrail = [newPos, ...prev.slice(0, 9)]; // Keep last 10 positions for longer trail
        return newTrail;
      });
    };

    const handleMouseLeave = () => {
      setIsActive(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        className={`cursor-glow ${isActive ? 'active' : ''}`}
        style={{
          left: position.x,
          top: position.y,
        }}
      />
      {trail.map((pos, index) => (
        <div
          key={index}
          className="cursor-trail"
          style={{
            left: pos.x,
            top: pos.y,
            opacity: (10 - index) / 10,
            transform: `scale(${(10 - index) / 10})`,
          }}
        />
      ))}
    </>
  );
};

export default CursorGlow;
