import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom'
import zooLogo from '../../assets/images/zoo-logo.png'
import styles from './LayoutGallery.module.css'
import Footer from '../../components/Footer';
import hamburgerMenu from '../../assets/images/hamburger-menu.png'

const LayoutGallery = ({ updateSelectedGroup, pageTitle, showAnimal, resetShowAnimal }) => {

    const [showHamburger, setShowHamburger] = useState(false)

    const handlePageChoice = (group) => {
        updateSelectedGroup(group)
        resetShowAnimal(null)
        setShowHamburger(false)
    }

    const toggleHamburger = () => {
        setShowHamburger(!showHamburger)
    }

    const hideHamburger = () => {
        setShowHamburger(false)
    }

    return (
        <>
            <nav className={styles.nav}>
                <img className={styles.logo} src={zooLogo} alt="logo" width="60px" />
                <img onClick={toggleHamburger} className={`${styles.hamburgerImg} ${styles[showHamburger ? 'spinBurger' : '']}`} src={hamburgerMenu} alt="hamburger" width="30px" />

                <NavLink onClick={() => handlePageChoice(null)} className={styles.navItem} to="/">Home</NavLink>
                <NavLink onClick={() => handlePageChoice('mammals')} className={styles.navItem} to="/mammals?group=mammals">Mammals</NavLink>
                <NavLink onClick={() => handlePageChoice('birds')} className={styles.navItem} to="/birds?group=birds">Birds</NavLink>
                <NavLink onClick={() => handlePageChoice('reptiles')} className={styles.navItem} to="/reptiles?group=reptiles">Reptiles</NavLink>
                <NavLink onClick={() => handlePageChoice('dogs')} className={styles.navItem} to="/dogs?group=dogs">Dogs</NavLink>
                <NavLink onClick={() => handlePageChoice('gallery')} className={styles.navItem} to="/gallery">Gallery</NavLink>
            </nav>
            <nav className={`${styles.hamburger} ${styles[showHamburger ? 'visible' : '']}`}>
                <NavLink onClick={() => handlePageChoice(null)} className={styles.hamburgerItem} to="/">Home</NavLink>
                <NavLink onClick={() => handlePageChoice('mammals')} className={styles.hamburgerItem} to="/mammals?group=mammals">Mammals</NavLink>
                <NavLink onClick={() => handlePageChoice('birds')} className={styles.hamburgerItem} to="/birds?group=birds">Birds</NavLink>
                <NavLink onClick={() => handlePageChoice('reptiles')} className={styles.hamburgerItem} to="/reptiles?group=reptiles">Reptiles</NavLink>
                <NavLink onClick={() => handlePageChoice('dogs')} className={styles.hamburgerItem} to="/dogs?group=dogs">Dogs</NavLink>
                <NavLink onClick={() => handlePageChoice('gallery')} className={styles.hamburgerItem} to="/gallery">Gallery</NavLink>
            </nav>
            <div onClick={hideHamburger} className={`${styles.overlay} ${styles[showHamburger ? 'showOverlay' : '']}`}></div>
            <div className={styles.mainContent}>
                <Outlet />
            </div>
            <Footer />
        </>
    )
};

export default LayoutGallery
