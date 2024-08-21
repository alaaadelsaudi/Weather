document.addEventListener("DOMContentLoaded", () =>{
const apiKey = "b8d1d0c18328e2276fb50588ff7ad9b9";
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const cityElement = document.querySelector(".city");
const tempElement = document.querySelector(".temp");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");
const weathericon=document.querySelector(".weather-icon")
 const   weatherImages=document.querySelectorAll('.hidden')



function checkwather(city) {
    let request = new XMLHttpRequest();
    request.open('get', `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

    request.addEventListener('readystatechange', () => {
        if (request.readyState == 4 && request.status == 200) {
            let data = JSON.parse(request.responseText);
            console.log(data);

            cityElement.innerHTML = data.name;
            tempElement.innerHTML = `${data.main.temp} °C`;
            humidityElement.innerHTML = `${Math.round(data.main.humidity)}%`;
            windElement.innerHTML = `<i class="fa-solid fa-wind"></i>  ${data.wind.speed} m/s`;


             weatherImages.forEach(img => img.classList.add('hidden'));


             if(data.weather[0].main=='Clear'){
                document.getElementById('img1').classList.remove('hidden');
             }
            
         if(data.weather[0].main=="Clouds"){
            document.getElementById('img2').classList.remove('hidden'); ; 
            }
           else if(data.weather[0].main=="Drizzle"){
            document.getElementById('img3').classList.remove('hidden'); 
            }
        else if(data.weather[0].main == "Mist"){
            document.getElementById('img4').classList.remove('hidden');
           }
         else if(data.weather[0].main == "Rain"){
            document.getElementById('img5').classList.remove('hidden');
            }
           else if(data.weather[0].main == "Snow"){
                document.getElementById('img6').classList.remove('hidden');
            }
else {
    
    console.log('error');
}
        }
    });

   request.send();
}


searchBtn.addEventListener("click", () => {
    const cityName = searchInput.value;
    checkwather(cityName);
 });
});
 
// console.log()

