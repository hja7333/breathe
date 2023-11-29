import { useState } from "react";
import "./App.css";
import Header from "./Header";
import PostcodeSearch from "./userInput";
import CarbonCard from "./carbonCard";
import Footer from "./Footer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App h-screen flex flex-col">
      <Header />
      <PostcodeSearch setSearchTerm={setSearchTerm} />
      <CarbonCard searchTerm={searchTerm} />
      <Footer />
    </div>
  );
}

export default App;
