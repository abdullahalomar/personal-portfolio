import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Shared/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/Home/About';
import Blog from './pages/Home/Blog';
import Footer from './pages/Shared/Footer/Footer';
import Contact from './pages/Home/Contact';
import Projects from './pages/Home/Projects';
import Services from './pages/Home/Services';
import NotFound from './pages/Shared/NotFound/NotFound';
import AllProjects from './pages/Home/AllProjects/AllProjects';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    
    <div className=''>
      <Navbar></Navbar>
      <div className='container mx-auto'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/all-projects' element={<AllProjects/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      </div>
      <Footer></Footer>
      <ToastContainer/>
    </div>
  );
}

export default App;

