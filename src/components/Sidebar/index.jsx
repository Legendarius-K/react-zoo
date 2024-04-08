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

    const params = new URLSearchParams(location.search);
    const group = params.get('group');
    
    // const handleClick = (classOfAnimal) => {
    //     clickedAnimal === classOfAnimal ? showAnimal(null) : showAnimal(classOfAnimal)
    //     clickedAnimal = classOfAnimal
    // }



    return (
        <div className={styles.sidebar}>
            {!group || group === 'mammals' ?
                <>
                    <div className={styles.sidebarSubHead}>
                        <h3>Mammals</h3>
                        {mammals.map((animal, index) => <p onClick={() => handleClick(animal.animalClass)} className="sidebarItem" key={index}>{animal.species}</p>)}
                    </div>
                </>
                : ''}
            {!group || group === 'birds' ?
                <>
                    <div className={styles.sidebarSubHead}>
                        <h3>Birds</h3>
                        {birds.map((animal, index) => <p onClick={() => handleClick(animal.animalClass)} className="sidebarItem" key={index}>{animal.species}</p>)}
                    </div>
                </>
                : ''}
            {!group || group === 'reptiles' ?
                <>
                    <div className={styles.sidebarSubHead}>
                        <h3>Reptiles</h3>
                        {reptiles.map((animal, index) => <p onClick={() => handleClick(animal.animalClass)} className="sidebarItem" key={index}>{animal.species}</p>)}
                    </div>
                </>
                : 'Woof'}

        </div>
    )
};

export default Sidebar
