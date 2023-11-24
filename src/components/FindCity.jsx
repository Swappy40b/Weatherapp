import { useEffect, useState } from "react";
//import { getWeatherDetails, getWeatherDetailsByCity } from "../service/WeatherService";
import { useDispatch, useSelector } from 'react-redux'
import { saveWeatherDetails, getWeatherDetails } from "../redux/reducers/WeatherReducer";
import { getProductDetails } from "../redux/reducers/ProductReducer";

function FindCity() {

    let dispatch=useDispatch()
     const [input,setInput]=useState("")
     const [disabled,setDisabled]=useState(false)
     let {weatherDetails:wd} = useSelector((state)=>state.weather)

    let _getWeatherDetails =async (event)=>{//we get here event from onChange
       event.preventDefault()

       if(input !=="")
       {
        setDisabled(true)
       dispatch (getWeatherDetails(input))

       /*let data=  await getWeatherDetailsByCity(input) //it is called by service //it is promise
       if(data){
        //console.log(data)
       dispatch(saveWeatherDetails(data))
        setInput("")
       }else{
        dispatch(saveWeatherDetails(null))
        alert("Result Not Found")
       }*/
       
       } 
    }

     let getApiData =()=>{
      dispatch(getProductDetails())// it will run under dispatch bcz it is action method

     }

    useEffect(()=>{
        setDisabled(false)
        setInput("")
        
    },[wd])
    return (
      <>
      
            <button onClick={getApiData}>Get API Data</button>
            <br></br>
            <br></br>
            <form className='' onSubmit={_getWeatherDetails}>
              <div className="mb-2 input-group">
                <input className='form-control' type="text"  placeholder='Enter City e.g.Pune'
                 value={input} onChange={(event)=>setInput(event.target.value)}/>{/* we didn't create separate method*/}
                <button disabled={disabled} 
                className='btn btn-success input-group-text'>
                   {disabled ? <i>'Getting...'</i>:"Get"} 
                    </button>
              </div>
            </form>
          
      </>
        
      
    );
  }
  export default FindCity