import { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledTypingMessages = styled.div`
  display: block;

  .email {
    font-size: 12px;
    color: #000080;
  }
`;

const messages = [
  'For enquiries call +254757351475',
  'For assistance email ndanumumo93@gmail.com',
  'We are available within 24 hours'
];

const TypingMessages = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingDelay = 1000; // Delay between typing each character
    const deletingDelay = 1000; // Delay between deleting each character
    const initialPause = 1000; // Pause before starting to type

    const randomDelay = () => Math.floor(Math.random() * 1000) + 50; // Random delay between 50ms and 150ms

    const handleMessage = () => {
      const currentMessageText = messages[currentMessageIndex];
      const messageLength = currentMessageText.length;

      if (!isDeleting) {
        // Typing
        setCurrentMessage(prev => {
          const nextChar = currentMessageText.substr(prev.length, 1);
          return prev + nextChar;
        });

        if (currentMessage.length === messageLength) {
          // Typing complete, start deleting
          setIsDeleting(true);
          setTimeout(handleMessage, initialPause);
        } else {
          // Continue typing
          setTimeout(handleMessage, randomDelay() + typingDelay);
        }
      } else {
        // Deleting
        setCurrentMessage(prev => prev.slice(0, -1));

        if (currentMessage.length === 0) {
          // Deleting complete, move to the next message
          setIsDeleting(false);
          setCurrentMessageIndex(prev => (prev + 1) % messages.length);
          setTimeout(handleMessage, initialPause);
        } else {
          // Continue deleting
          setTimeout(handleMessage, randomDelay() + deletingDelay);
        }
      }
    };

    // Start typing effect
    setTimeout(handleMessage, initialPause);
  }, [currentMessage, currentMessageIndex, isDeleting]);

  return (
    <StyledTypingMessages>
      <div className="email">{currentMessage}</div>
    </StyledTypingMessages>
  );
};

export default TypingMessages;
