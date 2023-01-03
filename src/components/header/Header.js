import React, { useState } from 'react';
import styles from './Header.module.css'

const Header = () => {
    const [togglePosition, setTogglePosition] = useState('lvl1');

    const toggleHandler = () => {
        setTogglePosition((curr) => {
            if(curr === 'lvl1') {
                return'toggleSpan lvl1'
            } else if(curr === 'lvl2') {
                return'toggleSpan lvl2'
            } else {
                return'toggleSpan lvl3'
            }
        })
    }

  return (
    <div className={styles.header}>
        <p>
            <span>1</span>
            <span>2</span>
            <span>3</span>
        </p>
        <section>
            <p>calc</p>
            <div>
                <p className={styles.toggleText}>
                    <small>THEME</small>
                </p>
                <div className={styles.toggle} id={togglePosition}>
                    <span className={styles.toggleSpan}></span>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Header;
