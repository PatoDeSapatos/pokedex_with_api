import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Searchbar from "./components/SearchBar.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <div className="app"></div>
    </div>
  );
}

export default App;
