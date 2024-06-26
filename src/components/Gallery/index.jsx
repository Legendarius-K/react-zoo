import styles from './Gallery.module.css'

const Gallery = () => {
    return (
        <div className={styles.gallery}>
            <div>
                <div className={styles.galleryDescription}>
                    <h3>Elephants!</h3>
                    <p>Majestic af</p>
                </div>
                <div className={styles.elephant}></div>
            </div>
            <div>
                <div className={styles.galleryDescription}>
                    <h3>Furrballs!</h3>
                    <p>Furry af</p>
                </div>
                <div className={styles.furrball}></div>
            </div>
            <div>
                <div className={styles.galleryDescription}>
                    <h3>Giraffe!</h3>
                    <p>Tall af</p>
                </div>
                <div className={styles.giraffe}></div>
            </div>
            <div>
                <div className={styles.galleryDescription}>
                    <h3>Lion!</h3>
                    <p>Royal af</p>
                </div>
                <div className={styles.lion}></div>
            </div>
            <div>
                <div className={styles.galleryDescription}>
                    <h3>Panda!</h3>
                    <p>Kung Fu af</p>
                </div>
                <div className={styles.panda}></div>
            </div>
            <div>
                <div className={styles.galleryDescription}>
                    <h3>Parrot!</h3>
                    <p>Colorful af</p>
                </div>
                <div className={styles.parrot}></div>
            </div>
        </div>
    )
};

export default Gallery
