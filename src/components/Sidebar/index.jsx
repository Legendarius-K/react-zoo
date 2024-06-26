import styles from './Sidebar.module.css'
import { mammals, birds, reptiles } from '../../data/animals';
import { useState } from 'react';

const Sidebar = ({ animalGroupSB, showAnimal }) => {
    const [clickedAnimal, setClickedAnimal] = useState(null)
    const [highlight, setHighlight] = useState(null)
    console.log('highlight: ', highlight);

    let animalGroup = animalGroupSB

    const handleClick = (classOfAnimal) => {
        setClickedAnimal(clickedAnimal === classOfAnimal ? null : classOfAnimal)
        showAnimal(clickedAnimal === classOfAnimal ? null : classOfAnimal);
        setHighlight(highlight === classOfAnimal ? null : classOfAnimal)
    }

    const params = new URLSearchParams(location.search);
    const group = params.get('group');
    
    return (
        <div className={styles.sidebar}>
            {!group || group === 'mammals' ?
                <>
                    <div className={styles.sidebarSubHead}>
                        <h3>Mammals</h3>
                        {mammals.map((animal, index) => <p onClick={() => handleClick(animal.animalClass)} className={`${styles.sidebarItem} ${highlight === animal.animalClass ? styles.highlight : ''}`} key={index}>{animal.species}</p>)}
                    </div>
                </>
                : ''}
            {!group || group === 'birds' ?
                <>
                    <div className={styles.sidebarSubHead}>
                        <h3>Birds</h3>
                        {birds.map((animal, index) => <p onClick={() => handleClick(animal.animalClass)} className={`${styles.sidebarItem} ${highlight === animal.animalClass ? styles.highlight : ''}`} key={index}>{animal.species}</p>)}
                    </div>
                </>
                : ''}
            {!group || group === 'reptiles' ?
                <>
                    <div className={styles.sidebarSubHead}>
                        <h3>Reptiles</h3>
                        {reptiles.map((animal, index) => <p onClick={() => handleClick(animal.animalClass)} className={`${styles.sidebarItem} ${highlight === animal.animalClass ? styles.highlight : ''}`} key={index}>{animal.species}</p>)}
                    </div>
                </>
                : ''}
            {group === 'dogs' && 'Woof!' }
        </div>
    )
};

export default Sidebar
