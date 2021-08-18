import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<string[]>([]);

  async function handleSubmit(): Promise<void> {
    try {
      const { data } = await axios.get(`/search?q=${input}`);
      console.log(results);
      console.log(data);
      setResults(data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <input
        placeholder="input text to search"
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button type="submit" onClick={handleSubmit}>
        submit
      </button>
      {/* {results.map((result) => (
        <p>
          {result.split("\n").map((line) => (
            <div>
              {line}
              <br />
            </div>
          ))}
        </p>
      ))} */}
    </div>
  );
}
