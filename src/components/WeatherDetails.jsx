
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
function WeatherDetails() {
    let {weatherDetails:wd} = useSelector((state)=>state.weather) //weatherDetails from initialstate from WeatherReducer
   
     let [time,setTime] = useState({
        rise:"",
        set:"",
     })
    useEffect(()=>{

        if(wd){
          let rise = new Date(wd.sys.sunrise)
          let set = new Date(wd.sys.sunset)
          setTime({
            rise:rise.toLocaleTimeString(),
            set:set.toLocaleTimeString()
        })

          

        }
       

    },[wd])
    
    return (
      <>
      {wd ?(
        <section className="card">
            <section className="card-body">
                <h1>City: {wd.name}</h1>
                <h1>Temperature: {wd.main.temp}°C</h1>
                <h1>Sunrise: {time.rise}</h1>
                <h1>Sunset: {time.set}</h1>
            </section>
        </section>
      ) :null
      } 
         
      </>
        
      
    );
  }
  
  export default WeatherDetails;