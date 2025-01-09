import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./Compoent/Hero";
import Service from "./Compoent/serva";
import Project from "./Compoent/project";
import Blog from "./Compoent/Blog";
import Cotect from "./Compoent/Cotect";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="project" element={<Project />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contect" element={<Cotect/>}></Route>
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
