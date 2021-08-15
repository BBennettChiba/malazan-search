import { useState } from "react";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:4000";

export default function App() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.get(`/search?q=${input}`);
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
      {results.map((result) => (
        <p>
          {result.split("\n").map((line) => (
            <div>
              {line}
              <br />
            </div>
          ))}
        </p>
      ))}
    </div>
  );
}
