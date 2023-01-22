import { useState, useEffect } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Loading from './components/Loading'

import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'

const url = 'https://course-api.com/react-tours-project'
function App() {
  const[loading,setLoading] = useState(true);
  const [tours,setTours] = useState([]);

 const removeTour=(id)=>{
  const newTours = tours.filter((tour)=>tour.id!==id);
  setTours(newTours);
 }

  const fetchTours = async ()=>{
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    
    
  }
  useEffect(()=>{
    fetchTours();
  },[])

  if(loading){
    return <main>
      <Loading/>
    </main>
  }

  if(tours.length===0){
    return(
       <main>
          <div className='tittle'>
              <h2>no tours left</h2>
              <button className='btn' onClick={fetchTours}>refresh</button>
          </div>
      </main>
    ); 
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home tours={tours} removeTour={removeTour}/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
