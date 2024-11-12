import styles from './footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles['app-footer']} >
            <div className="container">
                <p>CopyRight</p>
            </div>
        </footer>
    )
}

export default Footer