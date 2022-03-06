import {
  Routes,
  Route
} from "react-router-dom";

import { Home } from './pages/Home'
import { Movie } from "./pages/Movie";
import { SearchMovie } from "pages/SearchMovie";
import { MovieByGenre } from "pages/MovieByGenre";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<Movie />} />
      <Route path="search/:movie" element={<SearchMovie />} />
      <Route path="movies/:genre" element={<MovieByGenre />} />

      <Route path="*" element={<Home />} />
    </Routes>
  )
}
