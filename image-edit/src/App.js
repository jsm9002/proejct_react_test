import './App.css';
import Main from './pages/Main';
import { Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import ImageAll from './pages/ImageAll';
import Goodslist from './pages/Goodslist';
import Header from './components/Header';

function App() {
  return (
    <div>

      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/imageall' element={<ImageAll/>}/>
        <Route path="/goodslist" element={<Goodslist/>}/>
        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
