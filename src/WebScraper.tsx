/*
import React, { useEffect, useState } from "react";
import axios from "axios";

interface WebScraperProps {
  transcript: string;
}

async function query(data: { inputs: string }) {
  try {
    const response = await axios.post(
      "https://api-inference.huggingface.co/models/gpt2",
      data,
      {
        headers: {
          Authorization: "",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error querying the API:", error);
    return null;
  }
}

const WebScraper: React.FC<WebScraperProps> = ({ transcript }) => {
  const [response, setResponse] = useState<string | null>(null);

  useEffect(() => {
    console.log("started query");
    query({ inputs: transcript }).then((responseData) => {
      console.log("API Response Data:", responseData);
      if (responseData) {
        setResponse(responseData.generated_text);
      }
    });
  }, [transcript]);

  return (
    <div>
      <h2>Web Scraper</h2>
      {response ? <p>Response: {response}</p> : <p>Loading...</p>}
    </div>
  );
};

export default WebScraper;
*/

import React, { useEffect, useState } from "react";
import axios from "axios";

interface WebScraperProps {
  transcript: string;
}

async function query(data: { inputs: string }) {
  try {
    const response = await axios.post(
      "https://api-inference.huggingface.co/models/gpt2",
      data,
      {
        headers: {
          Authorization: "",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error querying the API:", error);
    return null;
  }
}

const WebScraper: React.FC<WebScraperProps> = ({ transcript }) => {
  const [response, setResponse] = useState<string | null>(null);

  useEffect(() => {
    query({ inputs: transcript }).then((responseData) => {
      if (responseData) {
        //setResponse(JSON.stringify(responseData));
        const generatedText = responseData[0]?.generated_text || "";
        setResponse(generatedText);
      }
    });
  }, [transcript]);

  return (
    <div>
      {response !== null ? <h4>Response: {response}</h4> : <p>Loading...</p>}
    </div>
  );
};

export default WebScraper;
