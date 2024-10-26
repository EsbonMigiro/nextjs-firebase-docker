import { useState } from "react";
function CourseSearch({ getSearchResult }) {
  const [query, setQuery] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/courses/search?query=${query}`);
    const courses = await response.json();

    getSearchResult(courses);
  };
  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        onChange={(e) => setQuery(e.target.value)}
        className="search-input text-black"
        placeholder="search course..."
        type="text"
        value={query}
      />
      <button className="search-button" type="submit">
        {" "}
        search
      </button>
    </form>
  );
}

export default CourseSearch;
