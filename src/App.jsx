import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import AnimalsPage from './components/AnimalsPage'
import Home from './components/Home'
import './App.css'

function App() {

  return (
    <>
        <Routes >
            <Route element={ <Layout />}>
                <Route path="/" element={<Home pageTitle="Captivity Haven Zoo" />} />
                <Route path="/mammals" element={<AnimalsPage group={"mammals"} pageTitle="Mammals" subPageTitle={"Furry Friends"} />} />
                <Route path="/birds" element={<AnimalsPage pageTitle="Bird" subPageTitle={"Winged Dinosaurs"} />} />
                <Route path="/reptiles" element={<AnimalsPage pageTitle="Reptiles" subPageTitle={"Venomous Beasts"} />} />
            </Route>
        </Routes>
    </>
  )
}

export default App


// 