import { createSlice } from '@reduxjs/toolkit'


let WeatherSlice = createSlice({

    name:"weather",
    initialState:{
        weatherDetails:null,

    },
    reducers:{
        saveWeatherDetails: (state,action) =>{
            state.weatherDetails=action.payload
        },
        getWeatherDetails: () =>{}
    }
    
})
export default  WeatherSlice.reducer
export const {saveWeatherDetails,getWeatherDetails} = WeatherSlice.actions