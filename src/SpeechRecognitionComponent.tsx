import React, { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

interface SpeechRecognitionProps {
  onTranscriptChange: (transcript: string) => void;
}

const SpeechRecognitionComponent: React.FC<SpeechRecognitionProps> = ({
  onTranscriptChange,
}) => {
  const { transcript, resetTranscript, listening } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);

  const handleStartListening = () => {
    SpeechRecognition.startListening();
    setIsListening(true);
  };

  const handleStopListening = () => {
    setIsListening(false);
  };

  const handleClearTranscript = () => {
    resetTranscript();
  };

  useEffect(() => {
    if (!isListening && !listening) {
      // Call the parent component's callback function when "Stop Listening" is clicked
      onTranscriptChange(transcript);
    }
  }, [isListening, listening, transcript, onTranscriptChange]);

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleStartListening}
        disabled={listening}
      >
        Start Listening
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          handleStopListening();
          SpeechRecognition.stopListening();
        }}
        disabled={!listening}
      >
        Stop Listening
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleClearTranscript}
      >
        Clear Transcript
      </button>
      <div>
        <h3>Transcript: {transcript}</h3>
      </div>
    </div>
  );
};

export default SpeechRecognitionComponent;
