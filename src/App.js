import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import ConvertionContainer from "./Pages/Conversion/ConvertionContainer";
import CurrentContainer from "./Pages/Current/CorrentContainer";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <header>
          <Header />
        </header>
        <nav>
          <Navbar />
        </nav>
        <main>
          <Routes>
            <Route path="/*" element={<Navigate replace to="/current" />} />
            <Route path="/current" element={<CurrentContainer />} />
            <Route path="/convertion" element={<ConvertionContainer />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
