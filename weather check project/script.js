 
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9c2eaa094amsh8f072a6063bd530p1c1259jsn952bdde195f7',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};



const getWeather2 = (city)=>{
	cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
	.then(response => response.json())
	.then(response => {
		console.log(response,city)
 		feels_like2.innerHTML = response.feels_like
		humidity2.innerHTML = response.humidity
		max_temp2.innerHTML = response.max_temp
		min_temp2.innerHTML = response.min_temp
		sunrise2.innerHTML = response.sunrise
		sunset2.innerHTML = response.sunset
 		temp2.innerHTML = response.temp
		wind_degrees2.innerHTML = response.wind_degrees
		wind_speed2.innerHTML = response.wind_speed
	})
	.catch(err => console.error(err));
}
getWeather2("Mumbai")



const getWeather3 = (city)=>{
	cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
	.then(response => response.json())
	.then(response => {
		console.log(response,city)
		feels_like3.innerHTML = response.feels_like
		humidity3.innerHTML = response.humidity
		max_temp3.innerHTML = response.max_temp
		min_temp3.innerHTML = response.min_temp
		sunrise3.innerHTML = response.sunrise
		sunset3.innerHTML = response.sunset
 		temp3.innerHTML = response.temp
		wind_degrees3.innerHTML = response.wind_degrees
		wind_speed3.innerHTML = response.wind_speed
	})
	.catch(err => console.error(err));
}
getWeather3("Singapore")



const getWeather4 = (city)=>{
	cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
	.then(response => response.json())
	.then(response => {
		console.log(response,city)
		feels_like4.innerHTML = response.feels_like
		humidity4.innerHTML = response.humidity
		max_temp4.innerHTML = response.max_temp
		min_temp4.innerHTML = response.min_temp
		sunrise4.innerHTML = response.sunrise
		sunset4.innerHTML = response.sunset
 		temp4.innerHTML = response.temp
		wind_degrees4.innerHTML = response.wind_degrees
		wind_speed4.innerHTML = response.wind_speed
	})
	.catch(err => console.error(err));
}
getWeather4("Pune")





const getWeather5 = (city)=>{
	cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
	.then(response => response.json())
	.then(response => {
		console.log(response,city)
 		 
		feels_like5.innerHTML = response.feels_like
		humidity5.innerHTML = response.humidity
		max_temp5.innerHTML = response.max_temp
		min_temp5.innerHTML = response.min_temp
		sunrise5.innerHTML = response.sunrise
		sunset5.innerHTML = response.sunset
 		temp5.innerHTML = response.temp
		wind_degrees5.innerHTML = response.wind_degrees
		wind_speed5.innerHTML = response.wind_speed
		
		
	})
	.catch(err => console.error(err));

}  
getWeather5("Goa")





const getWeather = (city)=>{
	cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
		console.log(response,city)
 		temp.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		temp6.innerHTML = response.temp
		humidity6.innerHTML = response.humidity
		wind_speed6.innerHTML = response.wind_speed
	})
	.catch(err => console.error(err));

}
 submit.addEventListener("click", (e)=>{
	e.preventDefault()
  getWeather(city.value)
})

getWeather("Delhi")


 