import "./App.css";
import Header from "./Components/Header";
import Aside from "./Components/Aside";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="content p-3">
        <Aside />
        <Main />
      </div>

      <Footer />
    </>
  );
}

export default App;
