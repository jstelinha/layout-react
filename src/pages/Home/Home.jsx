import { Menu } from '../../Components/Menu/Menu'

import styles from './Home.module.css'


export function Home(){

    return(
        <div className={styles.Home}> 
            <Menu />
            <h1>Home</h1>
        </div>
    )
}