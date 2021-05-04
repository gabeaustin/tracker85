import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Tracker from "./components/Tracker";

function App() {
  return (
    <div className="App">
        <Navbar />
        <h1>Tracker85</h1>

        <Tracker />
    </div>
  );
}

export default App;
