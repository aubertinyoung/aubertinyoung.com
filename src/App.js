import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import WorkPage from "./pages/workPage";
import NavigationBar from "./components/navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/work" element={<WorkPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
