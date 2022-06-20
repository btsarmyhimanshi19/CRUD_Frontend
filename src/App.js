// import logo from './logo.svg';
import './App.css';
import './index.css';
import Navigation1 from './Components/Navigation1';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllUser from './Components/AllUser';
import AddUser from './Components/AddUser';
import Footer from './Components/Footer';
import Edituser from './Components/Edituser';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className='page-container'>
    <div className='content-wrap'>
    <BrowserRouter>
      <Navigation1 />
      <Routes>
        <Route path="/" element={<AllUser />} />
        {/* <Route path="/all" element={<AllUser />} /> */}
        <Route  path="/add" element={<AddUser />} />
        <Route  path="/edit/:id" element={<Edituser />} />
      </Routes>
    </BrowserRouter>
    </div>
    <Footer />
    </div>
  );
}

export default App;
