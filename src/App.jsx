import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import AnimalsPage from './components/AnimalsPage'
import Home from './components/Home'
import Dogs from './components/Dogs'
import Gallery from './components/Gallery'
import LayoutGallery from './pages/LayoutGallery'
import './App.css'

function App() {
    const [selectedGroup, setSelectedGroup] = useState(null)
    const [showAnimal, setShowAnimal] = useState()

    return (
        <>
            <Routes >
                <Route element={<Layout resetShowAnimal={setShowAnimal} showAnimal={setShowAnimal} updateSelectedGroup={setSelectedGroup} pageTitle={selectedGroup ? selectedGroup : "Ze Zoo"} />}>
                    <Route path="/" element={<Home showAnimal={showAnimal} />} />
                    <Route path="/mammals" element={<AnimalsPage showAnimal={showAnimal} pageTitle="Mammals" subPageTitle={"Furry Friends"} />} />
                    <Route path="/birds" element={<AnimalsPage showAnimal={showAnimal} pageTitle="Bird" subPageTitle={"Winged Dinosaurs"} />} />
                    <Route path="/reptiles" element={<AnimalsPage showAnimal={showAnimal} pageTitle="Reptiles" subPageTitle={"Venomous Beasts"} />} />
                    <Route path="/dogs" element={<Dogs pageTitle="Reptiles" subPageTitle={"Drooling Furrballs"} />} />
                </Route>
                <Route element={<LayoutGallery/>}>
                    <Route path="/gallery" element={<Gallery />} />
                </Route>
            </Routes>
        </>
    )
}

export default App


// 