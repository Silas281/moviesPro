import { BsSliders2 } from "react-icons/bs";

import "./App.css";
import MoviePosterPreview from "./components/main/moviePreviews/moviesPreview";
import Footer from "./components/common/footer/footer";
import Navbar from "./components/common/navBar/navBar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="header-container">
          <h1 className="header-title">Watch Movies</h1>
          <BsSliders2 className="filter" />
        </div>
        <MoviePosterPreview />
        <Footer />
      </div>
    </>
  );
}

export default App;
