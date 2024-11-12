import styles from './header.module.scss'

const Header = () => {
    return (
        <header className={styles['app-header']}>
            <div className="container">
                <h1>Catalogue</h1>
            </div>
        </header>
    )

}

export default Header