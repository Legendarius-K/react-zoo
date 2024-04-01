import { useState } from 'react';
import { getImageURL } from '../../utils/functions';
import Animal from '../Animal';
import { mammals, birds, reptiles } from '../../data/animals';
import styles from './AnimalsPage.module.css'

const AnimalsPage = ({ subPageTitle, selectedAnimalGroup}) => {
    let animalGroup = selectedAnimalGroup
    console.log(animalGroup);
    
    return (
        <>
            <div className={styles.animalGroupPage}>
                <h2 className={styles.subPageTitle}>{subPageTitle}</h2>

                {animalGroup === 'mammals' && mammals.map((animal, index) => <Animal key={index} {...animal} /> )}
                {animalGroup === 'birds' && birds.map((animal, index) => <Animal key={index} {...animal} /> )}
                {animalGroup === 'reptiles' && reptiles.map((animal, index) => <Animal key={index} {...animal} /> )}
            </div>
        </>
    )
};

export default AnimalsPage

