import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/Navbar";
import Container from "react-bootstrap/Container";
import Home from "./components/Home";

import {Routes, Route} from 'react-router-dom'
import About from "./components/About";
import Details from "./components/Details";


function App() {
 
  return (
    <>
      <AppNavbar />

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="details/:productSlug" element={<Details />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
