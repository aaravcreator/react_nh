import { useState } from "react"

export default function Weather(){

    const [city,setCity] = useState("biratnagar")
    const [weather,setWeather] = useState({})


    let baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4978dfb53da08bb0686a8254e45cb5d0`

    async function fetchWeather(){
        const response = await fetch(baseUrl)
        const responseJson = await response.json()
        console.log(responseJson)
        setWeather(responseJson)
    }


    return <div>
        <h1>WEATHER APP</h1>
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
            <div className="weather">
                <h1>Temperature: {weather.main.temp} °C</h1> 

                    <h2>{weather.weather[0].main}</h2>
                    <p>{weather.weather[0].description}</p>
                    <h2>{weather.name}</h2>

            </div>
            )
        }



    </div>
}