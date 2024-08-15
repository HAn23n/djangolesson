const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box')
const weatherDetails = document.querySelector('.weather-details')



search.addEventListener('click',() => {
    
    const APIKey = '2aba310d3399ec8f04c606959aba8eea';
    const city = document.querySelector('.search-box input').value;

    if(city == '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {
        
        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch(json.weather[0].main){
            case 'Clear':
                image.src = 'https://img5.pic.in.th/file/secure-sv1/clear.png';
                break;
        
            case 'Rain':
                image.src = 'https://img2.pic.in.th/pic/rain89cdddd8a5f9f8af.png';
                break;    
                    
            case 'Snow':
                image.src = 'https://img5.pic.in.th/file/secure-sv1/snow.png';
                break;
        
            case 'Clouds':
                image.src = 'https://img2.pic.in.th/pic/cloud.png';
                break;
        
            case 'Mist':
                image.src = 'https://img2.pic.in.th/pic/mist.png';
                break;
        
            case 'Haze':
                image.src = 'https://img2.pic.in.th/pic/mist.png';
                break;
        
            default:
                image.src = 'https://img2.pic.in.th/pic/cloud.png';
                
        }
        
        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML =  `${json.main.humidity}%`;
        wind.innerHTML =  `${parseInt(json.wind.speed)}Km/h`;;
    
  

    
    });


});