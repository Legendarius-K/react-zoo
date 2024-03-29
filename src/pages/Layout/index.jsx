import styles from './Layout.module.css'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <nav className={styles.nav}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/mammals">Mammals</NavLink>
                <NavLink to="/birds">Birds</NavLink>
                <NavLink to="/reptiles">Reptiles</NavLink>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout
