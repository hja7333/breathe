import { useState } from "react";

function PostcodeSearch({ setSearchTerm }) {
  const [NewSearchTerm, setNewSearchTerm] = useState("");
  const handleChange = (event) => {
    console.log(event.target.value);
    setNewSearchTerm(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(NewSearchTerm);
    setSearchTerm(NewSearchTerm);
    setNewSearchTerm("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">
        Search for carbon intensity - Enter the first part of your postcode:{" "}
      </label>

      <input id="search" onChange={handleChange} />

      <button type="submit">Search</button>
    </form>
  );
}

export default PostcodeSearch;
