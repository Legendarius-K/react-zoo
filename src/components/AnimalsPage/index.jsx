import { useState } from 'react';
import Header from '../Header';
import styles from './AnimalsPage.module.css'

const AnimalsPage = ({ group, subPageTitle, pageTitle }) => {
    const [animalGroup, setAnimalGroup] = useState()

    console.log(group);
    
    

    return (
        <>
            <Header pageTitle={pageTitle} />
            <div className={styles.animalGroupPage}>
                <h2>{subPageTitle}</h2>
            </div>
        </>
    )
};

export default AnimalsPage
