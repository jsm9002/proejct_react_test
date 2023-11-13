import './App.css';
import Main from './pages/Main';
import { Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import ImageAll from './pages/ImageAll';
import Goodslist from './pages/Goodslist';
import Header from './components/Header';
import CreateImage from './pages/CreateImage';
import GoodsDetail from './pages/GoodsDetail';
import BuyScript from './pages/BuyScript';
import Basket from './pages/Basket';
import Example from './components/Example';

function App() {
  return (
    <div>

      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/imageall' element={<ImageAll/>}/>
        <Route path="/goodslist" element={<Goodslist/>}/>
        <Route path="/createimage" element={<CreateImage/>}/>
        <Route path="/goodsdetail" element={<GoodsDetail/>}/>
        <Route path="/buyscript" element={<BuyScript/>}/>
        <Route path="/basket" element={<Basket/>}/>
        <Route path="/*" element={<NotFound/>} />
        <Route path="/test" element={<Example/>}/>
      </Routes>
    </div>
  );
}

export default App;
