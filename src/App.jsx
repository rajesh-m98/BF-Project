import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Cart from './Component/Cart'; // Import the Cart component
import HomePage from './Component/HomePage';
import Chicken from './Component/Chicken';
import Egg from './Component/Egg';
import Otp from './Component/Otp';
import Profile from './Component/Profile';
import Mutton from './Component/Mutton';
import ColdCut from './Component/ColdCut';
import ChickenAddCart from './Component/ChickenAddCart';
import ChickenCustomize from './Component/ChickenCustomize';
import ProceedPay from './Component/ProceedPay';
import ColdCutCustomize from './Component/ColdCutCustmoize';
import Prawns from './Component/Prawns&Crabs';
import SeaFood from './Component/SeaFood';
import ReadyToCook from './Component/ReadyToCook';
import All from './Component/All';
import SeaFoodCustomize from './Component/SeaFoodCustomize';
import SeaFoodAddCart from './Component/SeaFoodAddCart';
import ReadyToCookCustomize from './Component/ReadyToCookCustomize';
import ReadyToCookAddCart from './Component/ReadyToCookAddCart';
// import ViewAll from './Component/ViewAll';
import PrawnsAddCart from './Component/PrawnsAddCart';
import PrawnsCustomize from './Component/PrawnsCustomize';
import EggAddCart from './Component/EggAddCart';
import MuttonAddCart from './Component/MuttonAddCart';
import MuttonCustomize from './Component/MuttonCustomize';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<Cart />} path='/cart.jsx' />
        <Route element={<Otp />} path='/Otp.jsx'></Route>
        <Route element={<Profile />} path='/Profile.jsx'></Route>
        <Route element={<ProceedPay/>} path='/ProceedPay.jsx'></Route>
        <Route element={<Mutton />} path='/Mutton.jsx'></Route>
        <Route element={<MuttonAddCart/>} path='/MuttonAddCart.jsx'></Route>
        <Route element={<MuttonCustomize/>} path='/MuttonCustomize.jsx'></Route>
        <Route element={<ColdCut />} path='/ColdCut.jsx'></Route>
        <Route element={<ColdCutCustomize/>} path='/ColdCutCustomize.jsx'></Route>
        <Route element={<Chicken />} path='/chicken.jsx' />
        <Route element={<ChickenAddCart/>} path='/ChickenAddCart.jsx'></Route>
        <Route element={<ChickenCustomize/>} path='/ChickenCustomize.jsx'></Route>
        <Route element={<Prawns/>} path='/Prawns.jsx'></Route>
        <Route element={<SeaFoodCustomize />} path='/SeaFoodCustomize.jsx'></Route>
        <Route element={<SeaFoodAddCart />} path='/SeaFoodAddCart.jsx'></Route>
        <Route element={<PrawnsAddCart/>} path='/PrawnsAddCart.jsx'></Route>
        <Route element={<PrawnsCustomize/>} path='/PrawnsCustomize.jsx'></Route>
        <Route element={<SeaFood/>} path='/SeaFood.jsx'></Route>
        <Route element={<SeaFoodAddCart/>} path='/SeaFoodAddCart.jsx'></Route>
        <Route element={<SeaFoodCustomize/>} path='/SeaFoodCustomize.jsx'></Route>
        <Route element={<Egg />} path='/Egg.jsx'></Route>
        <Route element={<EggAddCart/>} path='/EggAddCart.jsx'></Route>
        <Route element={<ReadyToCook/>} path='/ReadyToCook.jsx'></Route>
        <Route element={<ReadyToCookCustomize />} path='/ReadyToCookCustomize.jsx'></Route>
        <Route element={<ReadyToCookAddCart />} path='/ReadyToCookAddCart.jsx'></Route>
        <Route element={<All/>} path='/All.jsx'></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
