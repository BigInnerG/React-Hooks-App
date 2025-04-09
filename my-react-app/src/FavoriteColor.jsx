import {useState} from 'react';

function FavoriteColor(){
    const [color, setColor] = useState('');
   
    return (
        <>
        <h1>My fave color is <span style={{color}}>{color}</span>.</h1>

        <button
        id= "green"
        type= "button"
        onClick={() => setColor('green')}
        >GREEN</button>

         <button
         id= "blue"
        type= "button"
        onClick={() => setColor('blue')}
        >BLUE</button>
        
         <button
         id= "red"
        type= "button"
        onClick={() => setColor('red')}
        >RED</button>
        </>
    );
}
export default FavoriteColor;