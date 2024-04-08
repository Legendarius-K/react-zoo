import styles from './AnimalPopup.module.css'
import Animal from '../Animal';

const AnimalPopup = ({ spreadAnimal, togglePopup }) => {
    
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
