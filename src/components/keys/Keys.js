import styles from './Keys.module.css';

const Keys = ({bgColor, color, fontSize, width, height, text, shadow, onClick}) => {
    const keysStyles = {backgroundColor: bgColor, 
        color: color, 
        fontSize: fontSize, 
        width: width, 
        height: height, 
        boxShadow: shadow,
        }
 

    return (
        <button style={keysStyles} className={styles.keys} onClick={onClick} value={text}>
            {text}
        </button>
    );
};

export default Keys;