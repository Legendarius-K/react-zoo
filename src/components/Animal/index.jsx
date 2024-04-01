import styles from './Animal.module.css'
import { getImageURL } from '../../utils/functions';

const Animal = ({ animalClass, species, description, lifespan, group, food, length, weight, found, image }) => {
    return (
        <div className={`${styles.animal} ${styles[animalClass]} animal`}>
            <h2 className={styles.speciesHeadline}>{species}</h2>
            <div className={styles.imgDescription}>
                <img src={getImageURL(image)} alt={species} />
                <p>{description}</p>
            </div>
            <div className={styles.animalInfo}>
                <p><span>Lifespan: </span>{lifespan}</p>
                <p><span>Group: </span>{group}</p>
                <p><span>Food: </span>{food}</p>
                <p><span>Length: </span>{length}</p>
                <p><span>Weight: </span>{weight}</p>
                <p><span>Found: </span>{found}</p>
            </div>
        </div>
    )
};

export default Animal
