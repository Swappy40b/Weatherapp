import { all } from "redux-saga/effects"

import { getProductDetailsWatcher, getWeatherDetailsByCityWatcher } from "./WeatherWatcher"



 export function*  rootSaga(){

   

    let watchersArray= [
        getWeatherDetailsByCityWatcher(),
        getProductDetailsWatcher()
    ]
    yield  all(watchersArray) //run all parallel api
}