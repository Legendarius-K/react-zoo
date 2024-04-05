import styles from './Animal.module.css'
import { getImageURL } from '../../utils/functions';
import { NavLink } from 'react-router-dom';

const Animal = ({ animalClass, species, description, lifespan, group, food, length, weight, found, image, hideClass, imgClass, disableClickClass, animalGroup }) => {

    return (
        <div className={`${styles.animal} ${styles[animalClass]} animal`}>
            <h2 className={styles.speciesHeadline}>{species}</h2>
            <div className={styles.imgDescription}>
                <img className={styles[imgClass]} src={getImageURL(image)} alt={species} />
                <p>{description}</p>
            </div>
            <div className={styles.animalInfo}>
                <p className={styles[hideClass]}><span>Lifespan: </span>{lifespan}</p>
                <p className={styles[disableClickClass]}><span>Group: </span><a href={`${group}?group=${group}`}> {group} </a></p>
                <p><span>Food: </span>{food}</p>
                <p className={styles[hideClass]}><span>Length: </span>{length}</p>
                <p className={styles[hideClass]}><span>Weight: </span>{weight}</p>
                <p className={styles[hideClass]}><span>Found: </span>{found}</p>
            </div>
        </div>
    )
};

export default Animal
