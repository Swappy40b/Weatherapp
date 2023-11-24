import { takeLatest } from "redux-saga/effects";
import { getWeatherDetails } from "../reducers/WeatherReducer";
import { getProductDetailsHandler, getWeatherDetailsByCityHandler } from "./weatherServiceHandler";
import { getProductDetails } from "../reducers/ProductReducer";

 export function* getWeatherDetailsByCityWatcher(){
    console.log("watcher")

    yield takeLatest(getWeatherDetails.type,getWeatherDetailsByCityHandler)
}

export function* getProductDetailsWatcher(){
    
    yield takeLatest(getProductDetails.type,getProductDetailsHandler)
}