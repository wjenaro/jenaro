import { useState, useEffect } from 'react';
import './TerminalText.css';

export default function TerminalText({ text, delay = 0, speed = 50 }) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeoutId;
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
        timeoutId = setTimeout(typeText, speed);
      } else {
        setIsComplete(true);
      }
    };

    timeoutId = setTimeout(typeText, delay);
    return () => clearTimeout(timeoutId);
  }, [text, delay, speed]);

  return (
    <span className="terminal-text typing">
      {displayText}
      {!isComplete && <span className="cursor">_</span>}
    </span>
  );
}
