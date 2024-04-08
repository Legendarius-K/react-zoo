import styles from './Footer.module.css'

const Footer = () => {

    const today = new Date();
    const weekdayIndex = today.getDay()

    let openingHours = weekdayIndex === 0 ? 'Closed'  
        : weekdayIndex  >= 1 && weekdayIndex <= 4 ? '10.00 - 18.00'
        : weekdayIndex = 5 ? '11.00 - 16.00'
        : '11.00 - 17.00';

    return (
        <footer className={styles.footer}>
            <div className={styles.copyright}>
                <p>Copyright Darius 2024</p>
            </div>
            <div className={styles.hours}>
                <p><span>Opening Hours Today: </span></p>
                <p>{openingHours}</p>
            </div>
        </footer>
    )
};

export default Footer
