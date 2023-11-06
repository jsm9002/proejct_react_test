import './App.css';
import Main from './pages/Main';
import { Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import ImageAll from './pages/ImageAll';

function App() {
  return (
    <div> 
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/imageall' element={<ImageAll/>}/>
        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
