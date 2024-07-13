import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import "./App.css"

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('harry');

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(`https://www.omdbapi.com/?s=${searchTerm}&apikey=abbb530b`);
      setMovies(response.data.Search || []);
    };

    fetchMovies();
  }, [searchTerm]);

  return (
    <div className="App">
      <h1>Movies Search</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
