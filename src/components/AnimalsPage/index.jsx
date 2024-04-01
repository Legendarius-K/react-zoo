import { useState } from 'react';
import { getImageURL } from '../../utils/functions';
import Animal from '../Animal';
import WelcomeMessage from '../WelcomeMessage';
import { mammals, birds, reptiles, allAnimals } from '../../data/animals';
import styles from './AnimalsPage.module.css'

const AnimalsPage = ({ subPageTitle, selectedAnimalGroup, showAnimal}) => {
    let animalGroup = selectedAnimalGroup
    let toggledAnimal = showAnimal;


    
    return (
        <>
            <div className={styles.animalGroupPage}>
                <h2 className={styles.subPageTitle}>{subPageTitle}</h2>
                {allAnimals.map((animal, index) => { 
                    return toggledAnimal === animal.animalClass ? <Animal key={index} {...animal}/> : '';
                })}
                {!toggledAnimal && animalGroup === 'mammals' && <WelcomeMessage headline="Welcome to ze mammals page!" message="Here you can learn mpre about our mammals" />}
                {!toggledAnimal && animalGroup === 'birds' && <WelcomeMessage headline="Welcome to ze birds page!" message="Here you can learn mpre about our birds" />}
                {!toggledAnimal && animalGroup === 'reptiles' && <WelcomeMessage headline="Welcome to ze reptiles page!" message="Here you can learn mpre about our reptiles" />}
            </div>
        </>
    )
};

export default AnimalsPage

