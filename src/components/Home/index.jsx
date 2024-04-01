import styles from './Home.module.css'
import { allAnimals } from '../../data/animals';
import Animal from '../Animal';

const Home = ({ showAnimal }) => {

    let toggledAnimal = showAnimal;
    console.log('toggledAnimal: ', toggledAnimal);

    

    return (
        <div className={styles.home}>
            <h2 className={styles.homeSub}>Welcome to Le Zoo!</h2>

            {allAnimals.map((animal,  index) => {
                return <Animal key={index} {...animal} />
            })}
        </div>
    )
};

export default Home
