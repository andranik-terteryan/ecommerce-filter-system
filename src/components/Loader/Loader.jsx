import styles from './loader.module.scss'

const Loader = () => {
    return (
        <div className={styles["loaderBalls--overlay"]}>
            <div className={styles["loaderBalls"]}>
                <div className={styles["loaderBalls__item"]}></div>
                <div className={styles["loaderBalls__item"]}></div>
                <div className={styles["loaderBalls__item"]}></div>
            </div>
        </div>
    )
}

export default Loader