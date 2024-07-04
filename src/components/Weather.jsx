import { useState,useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ReactLogo from "../assets/react.svg"
import WeatherPhoto from "../assets/weather_photo.png"
export default function Weather(){

    const [city,setCity] = useState("biratnagar")
    const [weather,setWeather] = useState({})
    let baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4978dfb53da08bb0686a8254e45cb5d0`


    useEffect(()=>{
        fetchWeather()
    },[])

    async function fetchWeather(){
        const response = await fetch(baseUrl)
        const responseJson = await response.json()
        console.log(responseJson)
        setWeather(responseJson)
    }

    function getIcon(weather){

        if(weather == "Clouds"){
            return <FontAwesomeIcon icon="fa-solid fa-cloud"/>
        }
        else if (weather == "Mist"){
            return <FontAwesomeIcon icon="fa-solid fa-smog" />
        }
        else if (weather == "Rain"){
            return <FontAwesomeIcon icon="fa-solid fa-cloud-showers-water" />
        }
        else if (weather == "Clear"){
            return <FontAwesomeIcon icon="fa-solid fa-sun"/>
        }
        else{
            return <FontAwesomeIcon icon="fa-solid fa-sun"/>
        }


    }
    function getImage(weather){
        if (weather == "Clouds"){
            return 'https://plus.unsplash.com/premium_photo-1674834298045-e405bc99076b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
        else if(weather == "Rain"){
            return 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }

        return 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }


    return <div>
         <FontAwesomeIcon  icon="fa-solid fa-check-square" />
        <h1> <FontAwesomeIcon icon="fa-solid fa-cloud"/> WEATHER APP</h1>
            <p>{city}</p>
        <input type="text" placeholder="Enter city name.." onChange={
            (e)=>{
                // console.log(e.target.value)
                setCity(e.target.value)
            }
        }  style={{padding:"10px"}} />
        <button onClick={fetchWeather} >Search Weather</button>
        

        {
            weather.main && 
           (
           
            <div className="weather" style={{backgroundRepeat:"no-repeat",backgroundImage:`url('${getImage(weather.weather[0].main)}')`, backgroundSize:"cover" ,overflow:"hidden"}}  >
       
                <h1> <FontAwesomeIcon style={{color:"white"}} icon="fa-solid fa-temperature-three-quarters" /> Temperature: <span style={{color:"white"}}>{weather.main.temp} °C</span></h1> 
                <h1><FontAwesomeIcon style={{color:"white"}} icon="fa-solid fa-droplet" /> Humidity: <span style={{color:"white"}}>{weather.main.humidity} %</span></h1> 

                    <h2>{weather.weather[0].main}  {getIcon(weather.weather[0].main)}  </h2>
                    <p>{weather.weather[0].description}</p>
                    <h2> <FontAwesomeIcon style={{color:"white"}} icon="fa-solid fa-location-pin" /> {weather.name}</h2>

                 

            
            </div>
            )
        }



    </div>
}