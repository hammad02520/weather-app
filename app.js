let temp = document.getElementById("temp");
let description = document.getElementById("description");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");
let img = document.getElementById("img");
let name = document.getElementById("name");
let inputvalue = document.getElementById("input");
 {
function weatherSearch() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=91e3bd97109d2f58620832e6852f11f5&units=metric')
        .then(response => response.json())
        .then(data => {
            let nameValue = data["name"];
            let tempValue = data["main"]["temp"];
            name.innerHTML =`Weather in ` + nameValue;
            temp.innerHTML = tempValue + `°C`
            let speedValue = data["wind"]["speed"];
            wind.innerHTML =`Wind : ` +speedValue+ ` km/h`
            let description2 = data["weather"][0]["description"]
            description.innerHTML = description2
            let humidity1 = data["main"]["humidity"]
            humidity.innerHTML = `Humidity :  `+humidity1+ `%`
            let icon = data["weather"][0]["icon"]
            img.src =
            "https://openweathermap.org/img/wn/" + icon + ".png"

        }).catch(err => {
            swal("City not found!");
        })
       }
}

{
document.getElementById("input").addEventListener("keyup", function(e) {
        if (e.keyCode === 13) {
            document.getElementById("submit").click();
        }
    });
 
document.getElementById("submit").onclick = function() {
    weatherSearch()
    inputvalue.value= ""
  }
}











