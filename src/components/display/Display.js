import React, { useState } from 'react';
import  styles from './Display.module.css';

const Display = ({text, onChange}) => {

  return (
    <div className={styles.display}>
      <input type='text' value={text} onChange={onChange} />
    </div>
  );
};

export default Display;