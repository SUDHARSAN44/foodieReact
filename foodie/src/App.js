import LoginPage from './pages/LoginPage';
import FoodItems from './pages/FoodItemsPage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}></Route>
        <Route path="/foodItems" element={<FoodItems/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
