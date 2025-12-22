const btn= document.querySelector("button");
let temp=document.querySelector("#temp");
let city=document.querySelector("#city");
let humidity=document.querySelector("#humidity");
let  wind=document.querySelector("#wind");
let icon=document.querySelector("#weather-icon");
const input = document.querySelector("input");

const apikey="7a1c90b551dbbd7f17a11969aca95620"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric"

btn.addEventListener("click",(e)=>{   
const userInput=document.querySelector("input").value;
if(!userInput){
    alert("please enter the place ");
    return;
}else{
checkWeather(userInput);
}
    }
)

input.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        btn.click();
    }
});



async function checkWeather(user){
    const response=await fetch(apiUrl+`&q=${user}&appid=${apikey}`);
    const data= await response.json();
    console.log(data);
    if(data.cod==="404"){
      alert("City not Found");
      return;
    }
    const type= data.weather[0].main
    console.log(type);
    if(type==="Clouds"){
        icon.src="clouds.png";
    }else if(type==="Mist"){
        icon.src="mist.png";
    }else if(type==="Drizzle"){
        icon.src="drizzle.png";
    }else if(type==="Clear"){
        icon.src="clear.png";
    }else if(type==="Rain"){
        icon.src="rain.png";
    }else if(type==="Snow"){
        icon.src="snow.png";
    }
    city.textContent=data.name;
    temp.textContent=Math.round(data.main.temp)+ "°C";
    humidity.textContent=data.main.humidity+ "%";
    wind.textContent=data.wind.speed+ " m/s";
    
    
}