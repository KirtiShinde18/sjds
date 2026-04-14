import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import StoneJali from './pages/Products/StoneJali'
import StackingStone from './pages/Products/StackingStone'
import Murals from './pages/Products/Murals'
import StoneFireplace from './pages/Products/StoneFireplace'
import StoneTiles from './pages/Products/StoneTiles'
import GraniteArticle from './pages/Products/GraniteArticle'
import StoneFigure from './pages/Products/StoneFigure'
import StoneBase from './pages/Products/StoneBase'
import StoneHandcraft from './pages/Products/StoneHandcraft'
import StonePillars from './pages/Products/StonePillars'
import StoneFountain from './pages/Products/StoneFountain'
import StonePlanter from './pages/Products/StonePlanter'
import Footer from './components/Footer'
import StoneTilesCollections from './pages/Products/StoneTilesCollections'
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"


const App = () => {
  return <>

  {/* ROUTING  */}

  <ToastContainer/>
      <BrowserRouter>

      <Navbar/>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='products' element={<Products />} />
            <Route path='contact' element={<Contact />} />
          </Route>
          
          
          {/* products  */}
          <Route path='/products'>
            <Route index element={<Products />} />
            <Route path='stone-jali' element={<StoneJali />} />
            <Route path='stacking-stone' element={<StackingStone />} />
            <Route path='murals' element={<Murals />} />
            <Route path='stone-fire-place' element={<StoneFireplace />} />
            <Route path='stone-tiles' element={<StoneTiles />} />
            <Route path='stone-tiles-collections' element={<StoneTilesCollections />} />
            <Route path='granite-articles' element={<GraniteArticle />} />
            <Route path='stone-figure' element={<StoneFigure />} />
            <Route path='stone-base' element={<StoneBase />} />
            <Route path='stone-handcrafts' element={<StoneHandcraft />} />
            <Route path='stone-pillars' element={<StonePillars />} />
            <Route path='stone-fountain' element={<StoneFountain />} />
            <Route path='stone-planter' element={<StonePlanter />} />

          </Route>
          
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
  </>
}

export default App