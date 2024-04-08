import { useState } from 'react';
import styles from './Dogs.module.css'

const Dogs = () => {
    const [dogImg, setDogImg] = useState()

    const getDogImg = async () => {

        try {
            let response = await fetch('https://dog.ceo/api/breeds/image/random');
            let data = await response.json();
            setDogImg(data)
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <div>
            <img src={data.message} alt="" />
        </div>
    )
};

export default Dogs
