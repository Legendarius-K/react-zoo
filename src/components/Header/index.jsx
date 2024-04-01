import styles from './Header.module.css'

const Header = ({ pageTitle, subPageTitle }) => {
    return (
        <header className={styles.header}>
            <h1>{pageTitle}</h1>
            <h2>{subPageTitle}</h2>
        </header>
    )
};

export default Header
