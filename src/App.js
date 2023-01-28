import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import WorkPage from "./pages/workPage";
import NavigationBar from "./components/navbar";

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/work" element={<WorkPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
