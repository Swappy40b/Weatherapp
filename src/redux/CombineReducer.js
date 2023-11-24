import {} from 'react-redux'
import { combineReducers } from '@reduxjs/toolkit'
import WeatherReducer from './reducers/WeatherReducer'
import ProductReducer from './reducers/ProductReducer'

const reducer= combineReducers({

    weather:WeatherReducer,
    product:ProductReducer,
    
})

export  default reducer