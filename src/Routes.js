import {
  Routes,
  Route
} from "react-router-dom";

import { Home } from './pages/Home'
import { Movie } from "./pages/Movie";
import { SearchMovie } from "pages/SearchMovie";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<Movie />} />
      <Route path="search/:movie" element={<SearchMovie />} />

      <Route path="*" element={<Home />} />
    </Routes>
  )
}
