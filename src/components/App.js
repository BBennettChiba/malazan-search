import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");

  async function handleSubmit() {}

  return (
    <div>
      <input
        placeholder="input text to search"
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button type="submit" onClick={handleSubmit}>
        submit
      </button>
    </div>
  );
}
