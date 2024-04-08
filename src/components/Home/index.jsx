import styles from './Home.module.css'
import { allAnimals } from '../../data/animals';
import Animal from '../Animal';
import WelcomeMessage from '../WelcomeMessage';
import AnimalPopup from '../AnimalPopup';
import { useState } from 'react';

const Home = ({ showAnimal }) => {
    const [togglePopup, setTogglePopup] = useState(false)

    let toggledAnimal = showAnimal;

    const handleClick = () => {
        setTogglePopup(!togglePopup)
    }

    return (
        <div className={styles.home}>
            <h2 className={styles.homeSub}>Welcome to Ze Zoo!</h2>
            {allAnimals.map((animal, index) => {
                return animal.animalClass === toggledAnimal ? (
                    <div className={styles.homeAnimal} key={index}>
                        <Animal
                            species={animal.species}
                            image={animal.image}
                            description={animal.description.slice(0, 200)}
                            group={animal.group}
                            food={animal.food}
                            hideClass={"hide"}
                            imgClass={'imgHome'}
                        />
                        <div onClick={handleClick} className={styles.readMore}>Read more...</div>
                    </div>
                ) : '';
            })}
            {!toggledAnimal && <WelcomeMessage headline="Welcome to ze best zoo in ze world!" message="Ze Zoo is an awesome and vibrant Australian wildlife sanctuary, offering a unique blend of education, conservation, and entertainment. Nestled in the heart of Australia's diverse landscape, Ze Zoo boasts an impressive array of exhibits showcasing the country's rich biodiversity. From iconic marsupials like kangaroos and koalas to elusive reptiles such as pythons and crocodiles, visitors are treated to a firsthand experience of Australia's unique fauna. The zoo's commitment to conservation is evident through its breeding programs and habitat preservation initiatives, aimed at safeguarding endangered species and promoting environmental sustainability. Beyond its role as a sanctuary, Ze Zoo serves as an educational hub, offering interactive exhibits and guided tours to foster a deeper understanding of Australia's natural heritage. With its captivating exhibits, immersive experiences, and dedication to conservation, Ze Zoo promises visitors an unforgettable journey into the wonders of the Australian wilderness." />}
            {togglePopup && (
                <div className={styles.animalPopup}>
                    {allAnimals.map((animal, index) => {
                        return toggledAnimal === animal.animalClass ? (
                            <AnimalPopup key={index} spreadAnimal={animal} togglePopup={setTogglePopup} />
                        ) : null;
                    })}
                </div>
            )}
        </div>
    )
};

export default Home

