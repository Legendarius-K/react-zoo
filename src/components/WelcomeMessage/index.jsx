import styles from './WelcomeMessage.module.css'

const WelcomeMessage = ({ headline, message }) => {
    return (
        <div className={styles.welcomeMessage}>
            <h3>{headline}</h3>
            <p>{message}</p>
        </div>
    )
};

export default WelcomeMessage
