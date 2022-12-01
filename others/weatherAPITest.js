// weatherData={
//     "boston":{
//         data:{
//             main:{
//                 temp:40,
//                 feels_like:35,
//                 temp_min:36,
//                 temp_max:44,
//                 pressure:1026,
//                 humidity:40
//             }
//         }
//     },
//     "miami":{
//         data:{
//             main:{
//                 temp:70,
//                 feels_like:70,
//                 temp_min:65,
//                 temp_max:72,
//                 pressure:1026,
//                 humidity:40
//             }
//         }
//     },
//     "new york":{
//         data:{
//             main:{
//                 temp:35,
//                 feels_like:35,
//                 temp_min:30,
//                 temp_max:38,
//                 pressure:1026,
//                 humidity:40
//             }
//         }
//     }
// }

const cityWeather =  async (str)=>{
    try {
        if(typeof str !="string") throw "not a string"
        if(str=="") throw "string is empty"
        const url="https://testurl.com"
        const response = await fetch(url)
        const weatherData= await response.json() //defined the weatherData object above as no test url to make a fetch request to exist. 
        str=str.toLowerCase().trim()
        if(!weatherData[str]) throw "City Not found" 
        return weatherData[str].data.main 
        
    } catch (error) {
        console.log(error)
        return error
        
    }
}

console.log(cityWeather(""))
console.log(cityWeather(11))
console.log(cityWeather("   boston   "))
console.log(cityWeather("Miami"))
console.log(cityWeather("new york"))


// Write a function name cityWeather that returns an object representing the weather in a spicific cityWeather. The function will use API calls with axios or fetch. (mock api)

// - function has one parameter that is a string which must not be empty. If either is true throw approriate error messages

// -handle lowercase inputs and empty space.
// -Throw city not found error if the input doesnt exist.
// -return an object