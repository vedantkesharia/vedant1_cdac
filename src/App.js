// import logo from './logo.svg';
// import './App.css';
// import About from './components/About';
import MuiNavbar from './components/Navbar.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Theory from './components/Theory';
// import Test from './components/Test';
import Simulation1 from './components/Simulation1';
import Simulation2 from './components/Simulation2';
import Simulation3 from './components/Simulation3';
import Theory2 from './components/Theory2';
import Home from './components/Home';
import Quiz from './components/Quiz.js';





function App() {
  return (
    <>
    <BrowserRouter>
    <MuiNavbar/>
      <Routes>
        {/* <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route> */}
        <Route path="/" element={<Home/>} />
        <Route path="/theory" element={<Theory/>} />
        <Route path="/simulation1" element={<Simulation1/>} />
        <Route path="/simulation2" element={<Simulation2/>} />
        <Route path="/simulation3" element={<Simulation3/>} />
        <Route path="/test" element={<Quiz/>} />
        <Route path="/theory2" element={<Theory2/>} />

        {/* <Route path="/" element={<Theory/>} /> */}
        {/* <Route path="/test" element={<Test/>} /> */}

      </Routes>
    </BrowserRouter>
    
    </>
   
  );
}

export default App;