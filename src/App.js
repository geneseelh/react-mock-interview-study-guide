import { useEffect, useState } from 'react';
import './App.css';
import ShowDetail from './ShowDetail';

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows?page=1")
      .then(response => response.json())
      .then(data => setShows(data))
      .catch((err)=>{
        console.log(err)
      });
  }, []);
  //console.log(shows[0])


  return (
    <div className="App">
      <h1>Look at these TV shows!</h1>
      {shows.map((show, index)=>{
        return (
          <ShowDetail key={index} show={show}/>
        )
      })}
    </div>
  );
}

export default App;
