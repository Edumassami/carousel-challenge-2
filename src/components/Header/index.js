import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <span>Marvel</span>
            <nav>
                <a href="#">Home</a>
                <a href="#">Fase 1</a>
            </nav>
        </header>
    );
};

export default Header;