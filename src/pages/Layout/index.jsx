import { useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import styles from './Layout.module.css'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = ({ updateSelectedGroup, pageTitle, animalGroupSB, showAnimal }) => {
 



    const handlePageChoice = (group) => {
        updateSelectedGroup(group)
    }


    return (
        <>
            <nav className={styles.nav}>
                <NavLink onClick={() => handlePageChoice(null)} className={styles.navItem} to="/">Home</NavLink>
                <NavLink onClick={() => handlePageChoice('mammals')} className={styles.navItem} to="/mammals">Mammals</NavLink>
                <NavLink onClick={() => handlePageChoice('birds')} className={styles.navItem} to="/birds">Birds</NavLink>
                <NavLink onClick={() => handlePageChoice('reptiles')} className={styles.navItem} to="/reptiles">Reptiles</NavLink>
            </nav>
            <Header pageTitle={pageTitle} />
            <div className={styles.mainContent}>
                <Sidebar showAnimal={showAnimal} animalGroupSB={animalGroupSB} />
                <Outlet />

            </div>
        </>
    )
};

export default Layout
