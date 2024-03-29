import styles from './Header.module.css'

const Header = ({ pageTitle }) => {
    return (
        <header>
            <h1>{pageTitle}</h1>
        </header>
    )
};

export default Header
