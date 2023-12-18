import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <Link to='/'>
                <span>Marvel</span>
            </Link>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/fase1'>Fase 1</Link>
            </nav>
        </header>
    );
};

export default Header;