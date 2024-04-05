import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom'
import zooLogo from '../../assets/images/zoo-logo.png'
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import styles from './Layout.module.css'
import Footer from '../../components/Footer';

const Layout = ({ updateSelectedGroup, pageTitle, showAnimal, resetShowAnimal }) => {
 
    const handlePageChoice = (group) => {
        updateSelectedGroup(group)
        resetShowAnimal(null)
    }

    return (
        <>
            <nav className={styles.nav}>
                <img className={styles.logo} src={zooLogo} alt="logo" width="60px" />
                <NavLink onClick={() => handlePageChoice(null)} className={styles.navItem} to="/">Home</NavLink>
                <NavLink onClick={() => handlePageChoice('mammals')} className={styles.navItem} to="/mammals?group=mammals">Mammals</NavLink>
                <NavLink onClick={() => handlePageChoice('birds')} className={styles.navItem} to="/birds?group=birds">Birds</NavLink>
                <NavLink onClick={() => handlePageChoice('reptiles')} className={styles.navItem} to="/reptiles?group=reptiles">Reptiles</NavLink>
            </nav>
            <Header pageTitle={pageTitle} />
            <div className={styles.mainContent}>
                <Sidebar showAnimal={showAnimal}/>
                <Outlet />
            </div>
                <Footer />
        </>
    )
};

export default Layout
