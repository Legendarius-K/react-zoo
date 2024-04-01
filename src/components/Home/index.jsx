import styles from './Home.module.css'
import { allAnimals } from '../../data/animals';
import Animal from '../Animal';
import WelcomeMessage from '../WelcomeMessage';

const Home = ({ showAnimal }) => {

    let toggledAnimal = showAnimal;

    return (
        <div className={styles.home}>
            <h2 className={styles.homeSub}>Welcome to Ze Zoo!</h2>
            {allAnimals.map((animal, index) => {
               return animal.animalClass === toggledAnimal ? <Animal key={index} {...animal} /> : '';
            })}
            {!toggledAnimal && <WelcomeMessage headline="Welcome to ze best zoo in ze world!" message="This zoo is a zoo." />}
        </div>
    )
};

export default Home

