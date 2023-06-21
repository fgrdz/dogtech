import { Link, useLocation } from 'react-router-dom';
import styles from  './Menu.module.css';
const Menu = ()=>{
    const localizacao = useLocation();
    return(
        
            <header>
                <nav className={styles.navegacao}>
                    <Link className={`
                        ${styles.link}
                        ${localizacao.pathname==="/" ? styles.linkDestacado : ""}
                    `} to="/">
                        Inicio
                    </Link>
                    <Link className={`
                        ${styles.link}
                        ${localizacao.pathname==="/SobreMim" ? styles.linkDestacado: "" }
                    `} to="/SobreMim">
                        Sobre Mim
                    </Link>
                </nav>
            </header>
    )
}

export default Menu