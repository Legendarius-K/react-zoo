import { useState } from 'react';
import { getImageURL } from '../../utils/functions';
import Animal from '../Animal';
import WelcomeMessage from '../WelcomeMessage';
import { mammals, birds, reptiles, allAnimals } from '../../data/animals';
import styles from './AnimalsPage.module.css'

const AnimalsPage = ({ subPageTitle, showAnimal}) => {
   
    let toggledAnimal = showAnimal;

    const params = new URLSearchParams(location.search);
    const group = params.get('group');
    console.log(group);

    
    return (
        <>
            <div className={styles.animalGroupPage}>
                <h2 className={styles.subPageTitle}>{subPageTitle}</h2>
                {allAnimals.map((animal, index) => { 
                    return toggledAnimal === animal.animalClass ? <Animal key={index} {...animal} disableClickClass={'disableClick'} hideButton={'hide'} imgClass={'imgGroupPage'} /> : '';
                })}
                {!toggledAnimal && group === 'mammals' && <WelcomeMessage headline="Welcome to ze mammals page!" message="Mammals represent a diverse group of animals characterized by several key features, including warm-bloodedness, hair or fur covering their bodies, and the production of milk to nourish their young. These creatures inhabit a wide range of environments, from the depths of oceans to the highest mountain peaks. Mammals display remarkable adaptability, with species such as whales evolving to live entirely in aquatic environments, while others like bats have developed the ability to fly. Mammals play crucial roles in ecosystems as predators, prey, and seed dispersers, contributing to biodiversity and ecosystem stability. From the massive elephants to the tiny shrews, mammals exhibit a remarkable array of sizes, shapes, behaviors, and lifestyles, making them one of the most fascinating groups of animals on Earth." />}
                {!toggledAnimal && group === 'birds' && <WelcomeMessage headline="Welcome to ze birds page!" message="Birds are a diverse group of warm-blooded vertebrates characterized by feathers, beaks, and the ability to lay eggs. With over 10,000 species, birds inhabit virtually every ecosystem on Earth, from polar regions to tropical rainforests. Adaptations like hollow bones and powerful flight muscles enable many species to soar through the skies, while others have evolved to be flightless, such as ostriches and penguins. Birds exhibit a wide range of behaviors, from complex mating rituals to intricate nest-building techniques. As pollinators, seed dispersers, and predators, birds play vital ecological roles, contributing to ecosystem health and stability. Their diverse plumage, distinctive calls, and remarkable migrations make them a subject of fascination for birdwatchers and scientists alike, highlighting their significance in both natural history and human culture." />}
                {!toggledAnimal && group === 'reptiles' && <WelcomeMessage headline="Welcome to ze reptiles page!" message="Reptiles constitute a fascinating and ancient group of vertebrates characterized by their scaly skin, cold-blooded metabolism, and reliance on external sources of heat to regulate body temperature. With species ranging from tiny geckos to massive crocodiles, reptiles inhabit a diverse array of habitats, including deserts, rainforests, and even oceans. Many reptiles, such as snakes and lizards, are predators, equipped with specialized adaptations for hunting and capturing prey. Others, like turtles and tortoises, have evolved unique shells for protection. Reptiles are known for their ability to survive in extreme environments and endure long periods without food or water. Despite their often misunderstood reputation, reptiles are essential components of ecosystems, contributing to biodiversity and serving as indicators of environmental health. Their ancient lineage and remarkable adaptations make them subjects of both scientific study and public fascination." />}
            </div>
        </>
    )
};

export default AnimalsPage

