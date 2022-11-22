import { useState } from 'react';
import Display from "../components/display/Display";
import Keys from '../components/keys/Keys';
import './Body.css';

const Body = () => {
    const [val, setVal] = useState(''); 
  
    const handleClick = (e) => {
     setVal(val + e.target.value)
    }

    const calculate = () => {
        setVal(Function("return " + val));
    }

    const del = () => {
        try {
            setVal(val.slice(0,-1))
        } catch {
            setVal('Error')
        }
        
    }

    const reset = () => {
        setVal('')
    }
  
  return (
    <>
        <Display text={val} onChange={(e) => e.target.value}/>
    
        <div className='body'>
            <section>
                <Keys bgColor='hsl(30, 25%, 89%)' color='hsl(223, 31%, 20%)'  fontSize='23px' shadow='0px 3px 2px hsl(28, 16%, 65%)' text='7' onClick={handleClick}/>

                <Keys bgColor='hsl(30, 25%, 89%)' color='hsl(223, 31%, 20%)'  fontSize='23px' shadow='0px 3px 2px hsl(28, 16%, 65%)' text='8' onClick={handleClick}/>

                <Keys bgColor='hsl(30, 25%, 89%)' color='hsl(223, 31%, 20%)'  fontSize='23px' shadow='0px 3px 2px hsl(28, 16%, 65%)' text='9' onClick={handleClick}/>

                <Keys bgColor='hsl(225, 21%, 49%)' color='#eee'  fontSize='19px' shadow='0px 3px 2px hsl(224, 28%, 35%)' text='DEL' onClick={() => del()}/>

                <Keys bgColor='hsl(30, 25%, 89%)' color='hsl(223, 31%, 20%)'  fontSize='23px' shadow='0px 3px 2px hsl(28, 16%, 65%)' text='4' onClick={handleClick}/>

                <Keys bgColor='hsl(30, 25%, 89%)' color='hsl(223, 31%, 20%)'  fontSize='23px' shadow='0px 3px 2px hsl(28, 16%, 65%)' text='5' onClick={handleClick}/>

                <Keys bgColor='hsl(30, 25%, 89%)' color='hsl(223, 31%, 20%)'  fontSize='23px' shadow='0px 3px 2px hsl(28, 16%, 65%)' text='6' onClick={handleClick}/>

                <Keys bgColor='hsl(30, 25%, 89%)' color='hsl(223, 31%, 20%)'  fontSize='23px' shadow='0px 3px 2px hsl(28, 16%, 65%)' text='+' onClick={handleClick}/>
                
                <Keys bgColor='hsl(30, 25%, 89%)' color='hsl(223, 31%, 20%)'  fontSize='23px' shadow='0px 3px 2px hsl(28, 16%, 65%)' text='1' onClick={handleClick}/>

                <Keys bgColor='hsl(30, 25%, 89%)' color='hsl(223, 31%, 20%)'  fontSize='23px' shadow='0px 3px 2px hsl(28, 16%, 65%)' text='2' onClick={handleClick}/>

                <Keys bgColor='hsl(30, 25%, 89%)' color='hsl(223, 31%, 20%)'  fontSize='23px' shadow='0px 3px 2px hsl(28, 16%, 65%)' text='3' onClick={handleClick}/>

                <Keys bgColor='hsl(30, 25%, 89%)' color='hsl(223, 31%, 20%)'  fontSize='23px' shadow='0px 3px 2px hsl(28, 16%, 65%)' text='-' onClick={handleClick}/>

                <Keys bgColor='hsl(30, 25%, 89%)' color='hsl(223, 31%, 20%)'  fontSize='23px' shadow='0px 3px 2px hsl(28, 16%, 65%)' text='.' onClick={handleClick}/>

                <Keys bgColor='hsl(30, 25%, 89%)' color='hsl(223, 31%, 20%)'  fontSize='23px' shadow='0px 3px 2px hsl(28, 16%, 65%)' text='0' onClick={handleClick}/>

                <Keys bgColor='hsl(30, 25%, 89%)' color='hsl(223, 31%, 20%)'  fontSize='23px' shadow='0px 3px 2px hsl(28, 16%, 65%)' text='/' onClick={handleClick}/>

                <Keys bgColor='hsl(30, 25%, 89%)' color='hsl(223, 31%, 20%)'  fontSize='23px' shadow='0px 3px 2px hsl(28, 16%, 65%)' text='*' onClick={handleClick}/>
            </section>
            
            <section>
                <Keys bgColor='hsl(225, 21%, 49%)' color='#eee'  fontSize='19px' shadow='0px 3px 2px hsl(224, 28%, 35%)' text='RESET' onClick={() => reset()}/>

                <Keys bgColor='hsl(6, 63%, 50%)' color='#eee'  fontSize='20px' shadow='0px 3px 2px hsl(6, 70%, 34%)' text='=' onClick={() => calculate()} />
            </section>
        </div>
    </>
  );
};

export default Body;