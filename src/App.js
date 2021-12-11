import React from "react";
import AllMovies from "./components/AllMovies/AllMovies";
import UpCommings from "./components/AllMovies/UpCommings";
import Trendings from "./components/AllMovies/Trendings";
import TvShows from "./components/TvShows/TvShows";
import AllPeople from "./components/People/allPeople";
import PeopleDetails from "./components/People/peopleDetails";
import Search from "./components/Search/search";
import Navbar from "./components/Navabar/Navbar";
import Footer from "./components/Navabar/Footer";
import TvShowsDetails from "./components/TvShows/TvShowsDetails";
import "./styles/styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/AllMovies/MovieDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<AllMovies />} />
          <Route path="/upcomming" element={<UpCommings />} />
          <Route path="/trending" element={<Trendings />} />
          <Route path="/MovieDetails/:id" element={<MovieDetails />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/TvDetails/:id" element={<TvShowsDetails />} />
          <Route path="/people" element={<AllPeople />} />
          <Route path="/PeopleDetails/:id" element={<PeopleDetails />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
