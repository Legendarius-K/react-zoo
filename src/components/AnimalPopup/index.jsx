import styles from './AnimalPopup.module.css'
import Animal from '../Animal';
import { allAnimals } from '../../data/animals';
import { mammals } from '../../data/animals';

const AnimalPopup = ({ spreadAnimal, togglePopup }) => {
    
    console.log('spreadAnimal: ', spreadAnimal);

    const handleClick = () => {
        togglePopup(false)
    }

    return ( 

        
        <div className={styles.popup}>
            <p className={styles.cross} onClick={handleClick}>&#10005;</p>
            <Animal {...spreadAnimal} imgClass={'imgPopup'}/>
        </div>
    )
};

export default AnimalPopup
