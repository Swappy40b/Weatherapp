import axios from 'axios'

const BASE_URL='https://api.openweathermap.org/data/2.5/weather?'

const API_KEY="c57a806ee8bea1c3a71690f8ebcdf4dd"

const UNIT="metric"

export const getWeatherDetailsByCity= async (city= "") =>{ //used async bcz we use await

        console.log('service');
           let url= `${BASE_URL}q=${city}&appid=${API_KEY}&units=${UNIT}`
          
           return  axios.get(url)

}

export const getProductDetailsService= async () =>{ //used async bcz we use await

        
           let url= "https://fakestoreapi.com/products"
          
           return  axios.get(url)

}