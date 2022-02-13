import React from 'react';
import Navbar from '../../components/Navbar';
import Profile from '../../components/Profile';

import styles from './Home.module.css'
function Home(props) {
    return (
        <div className={styles.homeContainer}>
            <Navbar />
            <Profile />
        </div>
    );
}

export default Home;