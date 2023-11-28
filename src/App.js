import { useState } from "react";
import "./App.css";
import Header from "./Header";
import PostcodeSearch from "./userInput";
import CarbonCard from "./carbonCard";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <Header />
      <PostcodeSearch setSearchTerm={setSearchTerm} />
      <CarbonCard searchTerm={searchTerm} />
    </div>
  );
}

export default App;
