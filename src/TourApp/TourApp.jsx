import React,{useState,useEffect} from 'react'
import Tours from './Tours'
import './tour.css'
import tourData from './data'
function TourApp() {
    
    const [loading, setLoading] = useState(false)
    const [tours, setTours] = useState([])
  
    useEffect(() => {
      setLoading(true);
      // Simulating fetching data from an API with setTimeout
      setTimeout(() => {
        setTours(tourData); // Set the fetched tours data
        setLoading(false);
      }, 1000); // Simulated delay of 1 second
    }, []);
  
    const removeTour = (id) => {
      const newTours = tours.filter((tour) => tour.id !== id);
      setTours(newTours);
    };
  
    const fetchTours = () => {
      setLoading(true);
      // Simulating fetching data from an API with setTimeout
      setTimeout(() => {
        setTours(tourData); // Set the fetched tours data
        setLoading(false);
      }, 1000); // Simulated delay of 1 second
    };
    if (loading) {
      return (
        <main>
          <h1>Loding...</h1>
        </main>
      )
    }
    if (tours.length === 0) {
      return (
        <main>
          <div className='title'>
            <h2>no tours left</h2>
            <button className='btn' onClick={() => fetchTours()}>
              refresh
            </button>
          </div>
        </main>
      )
    }
    return (
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    )
}

export default TourApp
