import MenuLinks from '../MenuLinks';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <header className= {styles.header}>
        <Link className={styles.title} to='/'>Lacrei</Link>
        <nav className={styles.navigation}>
            <MenuLinks to="/" style={styles.active}>Home</MenuLinks>
            <MenuLinks to="/user-person" className={styles.links} style={styles.active} >Pessoa Usuária</MenuLinks>
            <MenuLinks to="/professional" className={styles.links} style={styles.active} >Profissional</MenuLinks>
        </nav>
    </header>
  );
}
