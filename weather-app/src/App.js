import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/Homepage";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <div className="App">
      <MyNavbar />
     <Homepage />
    </div>
  );
}

export default App;
