import { useState } from 'react';
import styles from './Dogs.module.css'
import dogIcon from '../../assets/images/dog-icon-white.png'

const Dogs = () => {
    const [dogImg, setDogImg] = useState()
    const [dogSpinner, setDogSpinner] = useState(false)

    const getDogImg = async () => {

        try {
            let response = await fetch('https://dog.ceo/api/breeds/image/random');
            let data = await response.json();
            setDogImg(data.message)
        } catch (error) {
            console.log(error);
        }

    }

    const spinDog = () => {
        setDogSpinner(!dogSpinner)
    }

    return (
        <div className={styles.dogs}>
            <p className={styles.petMe}>Pet Me!</p>
            <h2 className={styles.arrowDown}>&#x2193;</h2>
            <button onClick={() => getDogImg()} className={styles.dogBtn}><img src={dogIcon} alt="dog" width='70px' /></button>
            <img className={`${dogImg ? styles.dogImage : ''} ${dogSpinner ? styles.spinDog : ''}`} src={dogImg} alt="" width="85%"/>
            <p className={styles.petMe}>Spin Dog!</p>
            <h2 className={styles.arrowDown}>&#x2193;</h2>
            <button onClick={() => spinDog()} className={styles.dogBtn}><img src={dogIcon} alt="dog" width='70px' /></button>
        </div>
    )
};

export default Dogs
