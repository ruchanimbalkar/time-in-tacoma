import Clock from 'react-clock';
//import styles
import 'react-clock/dist/Clock.css';
import './ShowTime.css';
export default function ShowTime({digitalTime ,analogClock}){
  
    return (
      <div className='show-time'>
        <h2>{digitalTime}</h2>
        <Clock value={analogClock} renderNumbers={true}/>
      </div>
    );
}

