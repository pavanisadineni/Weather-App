var myLocation;
var a;

function weatherReport() {
    myLocation = document.querySelector(".input").value;
    a = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${myLocation}&APPID=2cf59e3c2ba338440a4e32992b4a76e7`)
    a.then((data1) => {
        return data1.json();
    }).then((data2) => {
        console.log(data2);

        document.querySelector(".error").style.display = "none";
        document.querySelector("#container ul").style.display = 'block';
        document.querySelector("#container ul").innerHTML = `
            <li>Area Name           : ${data2.name}</li>
            <li>Country             : ${data2.sys.country}</li>
            <li>Temparature         : ${Math.round(data2.main.temp - 273.15)*100/100}°C</li>
            <li>Min temperature     : ${Math.round(data2.main.temp_min - 273.15)*100/100}°C</li>
            <li>Max temperature     : ${Math.round(data2.main.temp_max - 273.15)*100/100}°C</li>
            <li>Weather             : ${data2.weather[0].description}</li>
            <li>Clouds              : ${data2.clouds.all}</li>
            <li>Wind Speed          : ${data2.wind.speed}</li>`;
        document.querySelector("form").reset();
    }).catch(error => {
        document.querySelector("#container ul").style.display = 'none';
        document.querySelector(".error").style.display = "block";
        console.log("Please Enter a valid area Name");
        document.querySelector(".error").innerHTML = `....... Please enter a valid area name`;
    });
}
document.querySelector("form").addEventListener('submit', function () {
    event.preventDefault();
    weatherReport();
});
document.querySelector(".submit").addEventListener('click', function () {
    event.preventDefault();
    weatherReport();
});