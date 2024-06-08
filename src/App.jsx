import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import Card from './components/Card';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/card' element={<Card/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
