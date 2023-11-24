
import { call, put } from 'redux-saga/effects'

import { saveWeatherDetails } from '../reducers/WeatherReducer';
import { getProductDetailsService, getWeatherDetailsByCity } from './WeatherService1';
import { saveProductDetails } from '../reducers/ProductReducer';




 export function*  getWeatherDetailsByCityHandler(action){ 
    console.log(action)

    console.log("Handler")

    try{
         //call api
         let {data}= yield  call(getWeatherDetailsByCity,action.payload)
        //put  that api to get the data

         yield put(saveWeatherDetails(data))
    }
    catch(error){
        console.log(error);
        yield put(saveWeatherDetails(null))
    }
   
}

export function* getProductDetailsHandler(){ 
    
   

    try{
         //call api
         let {data}= yield  call(getProductDetailsService)
        //put  that api to get the data

         yield put(saveProductDetails(data))
    }
    catch(error){
        console.log(error);
        yield put(saveProductDetails([]))
    }
   
}