import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";
import FooterComp from "./components/FooterComp";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/' element={<Home />} />

        <Route element={<PrivateRoute />}></Route>
      </Routes>
      <FooterComp />
    </BrowserRouter>
  );
}

export default App;
