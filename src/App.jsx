import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import PrawnsAddCart from './Component/PrawnsAddCart';
import PrawnsCustomize from './Component/PrawnsCustomize';
import EggAddCart from './Component/EggAddCart';
import MuttonAddCart from './Component/MuttonAddCart';
import MuttonCustomize from './Component/MuttonCustomize';
import ColdAddCart from './Component/ColdCutAddCart';
import Address from './Component/Address';
import './App.css'; // Import your CSS file for styling


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<Cart />} path='/cart.jsx' />
        <Route element={<Otp />} path='/Otp.jsx' />
        <Route element={<Profile />} path='/Profile.jsx' />
        <Route element={<ProceedPay />} path='/ProceedPay.jsx' />
        <Route element={<Mutton />} path='/Mutton.jsx' />
        <Route element={<MuttonAddCart />} path='/MuttonAddCart.jsx' />
        <Route element={<MuttonCustomize />} path='/MuttonCustomize.jsx' />
        <Route element={<ColdCut />} path='/ColdCut.jsx' />
        <Route element={<ColdAddCart />} path='/ColdCutAddCart.jsx' />
        <Route element={<ColdCutCustomize />} path='/ColdCutCustomize.jsx' />
        <Route element={<Chicken />} path='/chicken.jsx' />
        <Route element={<ChickenAddCart />} path='/ChickenAddCart.jsx' />
        <Route element={<ChickenCustomize />} path='/ChickenCustomize.jsx' />
        <Route element={<Prawns />} path='/Prawns.jsx' />
        <Route element={<SeaFoodCustomize />} path='/SeaFoodCustomize.jsx' />
        <Route element={<SeaFoodAddCart />} path='/SeaFoodAddCart.jsx' />
        <Route element={<PrawnsAddCart />} path='/PrawnsAddCart.jsx' />
        <Route element={<PrawnsCustomize />} path='/PrawnsCustomize.jsx' />
        <Route element={<SeaFood />} path='/SeaFood.jsx' />
        <Route element={<SeaFoodAddCart />} path='/SeaFoodAddCart.jsx' />
        <Route element={<SeaFoodCustomize />} path='/SeaFoodCustomize.jsx' />
        <Route element={<Egg />} path='/Egg.jsx' />
        <Route element={<EggAddCart />} path='/EggAddCart.jsx' />
        <Route element={<ReadyToCook />} path='/ReadyToCook.jsx' />
        <Route element={<ReadyToCookCustomize />} path='/ReadyToCookCustomize.jsx' />
        <Route element={<ReadyToCookAddCart />} path='/ReadyToCookAddCart.jsx' />
        <Route element={<All />} path='/All.jsx' />
        <Route element={<Address />} path='/Address.jsx' />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
