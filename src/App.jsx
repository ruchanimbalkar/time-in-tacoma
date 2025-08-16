import { useState, useEffect } from 'react'
//Import the Temporal library
import { Temporal } from "@js-temporal/polyfill";
//Import Components
import ShowTime from './components/ShowTime';
//import styles
import './App.css'

function App() {
  /* Get the current date and time in U.S.A. (Pacific Time Zone) and
  save it in a variable named 'dateTimeInTacoma' */
  // const dateTimeInTacoma = Temporal.Now.plainDateTimeISO("America/Los_Angeles");

  let currentDate = Temporal.Now.plainDateISO();

  const options = {
    day: 'numeric',
    month: 'long', // 'short' for abbreviated month (Aug)
    year: 'numeric'
  };

  currentDate = currentDate.toLocaleString('en-US', options);

  //console.log(currentDate); // Output: 'Month DD, YYYY'

   /* Get the current  time in Los Angeles (Pacific Time Zone) and
  save it in a  variable named 'time' */
  const time = Temporal.Now.zonedDateTimeISO("America/Los_Angeles");

  // Convert to JavaScript Date for locale formatting
  const jsDate = new Date(time.epochMilliseconds);

  const formattedTime = jsDate.toLocaleString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // This gives you 12-hour format
    timeZone: "America/Los_Angeles",
  });

  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <>
      <div className='container'>
          <h1>Time in Tacoma</h1>
          <ShowTime digitalTime={formattedTime} analogClock={value}  />
          <h2> {currentDate}</h2>
          <footer>
            <p>
             Background image by
            <a href="https://unsplash.com/@fotowei" target="_blank">Wei Zeng</a>
          </p>
          </footer>
      </div>
    </>
  )
}

export default App
