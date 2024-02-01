import "./App.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Navbar />
      </div>
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
