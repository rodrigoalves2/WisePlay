import { BrowserRouter as Router } from 'react-router-dom';

import { AppRoutes } from "./Routes";

import { Header } from "components/Header";

import 'styles/global.scss';

function App() {
  return (
    <Router>
      <Header />
      <AppRoutes />
    </Router>
  );
}

export default App;
