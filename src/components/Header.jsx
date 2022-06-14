import styles from './Header.module.css'
import { Alien} from "phosphor-react";


export function Header(){
  return(
    <header className={styles.header}>
      <div className='logon'>
          <Alien size={40}/>
      </div>
    </header>
  );
}
