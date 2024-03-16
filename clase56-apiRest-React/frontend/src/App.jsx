import "./App.css";
import Footer from "./components/Footer";
import Games from "./components/Games";
import Navbar from "./components/Navbar";
import Users from "./components/Users";

function App() {
  return (
    <>
      <Navbar />
      <Games />
      <Users />
      <Footer />
    </>
  );
}

export default App;
