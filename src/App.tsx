/*
import React from "react";
import "./App.css";
import SpeechRecognitionComponent from "./SpeechRecognitionComponent.tsx"; // Import your SpeechRecognitionComponent
import WebScraper from "./WebScraper.tsx";

const App: React.FC = () => {
  return (
    <div className="container-fluid">
      <header>
        <h1 className="display-2 fw-bold">Speech Recognition App</h1>
      </header>
      <main>
        <SpeechRecognitionComponent /> {}
        <WebScraper />
      </main>
    </div>
  );
};

export default App;
*/

import React, { useState } from "react";
import WebScraper from "./WebScraper";
import SpeechRecognitionComponent from "./SpeechRecognitionComponent";

async function query(data: { inputs: string }) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/gpt2",
    {
      headers: {
        Authorization: "",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
}

function App() {
  const [transcript, setTranscript] = useState<string>("");

  const handleTranscriptChange = (newTranscript: string) => {
    setTranscript(newTranscript);
  };

  return (
    <div className="container-fluid">
      <header>
        <h1 className="display-2 fw-bold">Speech Recognition App</h1>
      </header>
      <main>
        <SpeechRecognitionComponent
          onTranscriptChange={handleTranscriptChange}
        />
        <WebScraper transcript={transcript} />
      </main>
    </div>
  );
}

export default App;
