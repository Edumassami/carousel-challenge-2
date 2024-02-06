import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <Link to='/'>
                <span>Marvel</span>
            </Link>
            <nav>
                <Link to='/'>HOME</Link>
                <Link to='/fase1'>FASE 1</Link>
                <Link to='/fase2'>FASE 2</Link>
                <Link to='/fase3'>FASE 3</Link>
            </nav>
        </header>
    );
};

export default Header;