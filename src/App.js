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
        <body>
          <Routes>
            <Route path="/*" element={<CurrentContainer />} />
            <Route path="/" element={<Navigate replace to="/current" />} />
            <Route path="/convertion" element={<ConvertionContainer />} />
          </Routes>
        </body>
      </div>
    </div>
  );
}

export default App;
