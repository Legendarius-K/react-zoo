import styles from './Sidebar.module.css'
import { mammals, birds, reptiles } from '../../data/animals';
import { useState } from 'react';

const Sidebar = ({ animalGroupSB, showAnimal }) => {
    const [clickedAnimal, setClickedAnimal] = useState(null)
    
    let animalGroup = animalGroupSB

    const handleClick = (classOfAnimal) => {
        setClickedAnimal(clickedAnimal === classOfAnimal ? null : classOfAnimal)
        showAnimal(clickedAnimal === classOfAnimal ? null : classOfAnimal);
    }

    
    // const handleClick = (classOfAnimal) => {
    //     clickedAnimal === classOfAnimal ? showAnimal(null) : showAnimal(classOfAnimal)
    //     clickedAnimal = classOfAnimal
    // }



    return (
        <div className={styles.sidebar}>
            {!animalGroup || animalGroup === 'mammals' ?
                <>
                    <div className={styles.sidebarSubHead}>
                        <h3>Mammals</h3>
                        {mammals.map((animal, index) => <p onClick={() => handleClick(animal.animalClass)} className="sidebarItem" key={index}>{animal.species}</p>)}
                    </div>
                </>
                : ''}
            {!animalGroup || animalGroup === 'birds' ?
                <>
                    <div className={styles.sidebarSubHead}>
                        <h3>Birds</h3>
                        {birds.map((animal, index) => <p onClick={() => handleClick(animal.animalClass)} className="sidebarItem" key={index}>{animal.species}</p>)}
                    </div>
                </>
                : ''}
            {!animalGroup || animalGroup === 'reptiles' ?
                <>
                    <div className={styles.sidebarSubHead}>
                        <h3>Reptiles</h3>
                        {reptiles.map((animal, index) => <p onClick={() => handleClick(animal.animalClass)} className="sidebarItem" key={index}>{animal.species}</p>)}
                    </div>
                </>
                : ''}

        </div>
    )
};

export default Sidebar
