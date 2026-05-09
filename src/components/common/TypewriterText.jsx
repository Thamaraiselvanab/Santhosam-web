import React, { useState, useEffect } from 'react';

const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentText = '';
    let i = 0;
    let isTyping = true;
    let timer;

    const typeWriter = () => {
      if (isTyping) {
        if (i < text.length) {
          currentText += text.charAt(i);
          setDisplayText(currentText);
          i++;
          timer = setTimeout(typeWriter, 150);
        } else {
          isTyping = false;
          timer = setTimeout(typeWriter, 2000); // Pause at the end
        }
      } else {
        currentText = '';
        setDisplayText(currentText);
        i = 0;
        isTyping = true;
        timer = setTimeout(typeWriter, 500); // Pause before re-typing
      }
    };

    timer = setTimeout(typeWriter, 500);
    return () => clearTimeout(timer);
  }, [text]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0">{text}</span>
      <span className="absolute top-0 left-0 whitespace-nowrap">{displayText}</span>
    </span>
  );
};

export default TypewriterText;
