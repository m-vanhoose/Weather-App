let searchBar =  document.getElementById('cityname');

document.getElementById('search').addEventListener('click', function(event){
    event.preventDefault();
    citySearch(searchBar.value);
})

let citySearch = function(city) {
    let requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=3ef2a12f03e1ed36d30c2f2797577759';
    fetch(requestUrl)
        .then(function (response) {
        return response.json();
    })
        .then(function (data){
            console.log(data)
    
    let weatherData = document.getElementById('weatherdata');
    weatherData.innerHTML = ''
    let nameEl = document.createElement('p');
    nameEl.innerText = data.name;
    weatherData.appendChild(nameEl);
    let dateEl = document.createElement('span');
    dateEl.innerText = dayjs.unix(data.dt).format('MMMM D YYYY')
    weatherData.appendChild(dateEl);
    let imgEl = document.createElement('img')
    imgEl.src = 'http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png';
    weatherData.appendChild(imgEl);
    })
}