let searchBar =  document.getElementById('cityname');

document.getElementById('search').addEventListener('click', function(event){
    event.preventDefault();
    citySearch(searchBar.value);
})

let citySearch = function(city) {
    let requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=3ef2a12f03e1ed36d30c2f2797577759&units=imperial';
    fetch(requestUrl)
        .then(function (response) {
        return response.json();
    })
        .then(function (data){
            console.log(data);
    
    let cards = document.getElementById('cards');
    cards.classList.remove('hide');
    let ul = document.getElementById('ul');
    ul.classList.remove('hide');
    let weatherData = document.getElementById('weatherdata');
    weatherData.innerHTML = ''
    let nameEl = document.createElement('p');
    nameEl.innerText = data.name;
    weatherData.appendChild(nameEl);
    nameEl.className = 'cityname';
    let dateEl = document.createElement('span');
    dateEl.innerText = dayjs.unix(data.dt).format('MMMM D YYYY');
    weatherData.appendChild(dateEl);
    dateEl.className = 'date';
    let imgEl = document.createElement('img');
    imgEl.src = 'http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png';
    weatherData.appendChild(imgEl);
    imgEl.className = 'img';
    let temp0 = document.getElementById('temp0');
    temp0.innerText = data.main.temp +' °F';
    let wind0 = document.getElementById('wind0');
    wind0.innerText = data.wind.speed + ' MPH';
    let hum0 = document.getElementById('hum0');
    hum0.innerText = data.main.humidity + ' %';
    });

    let requestUrl2 = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city +'&units=imperial&appid=3ef2a12f03e1ed36d30c2f2797577759';
    fetch(requestUrl2)
        .then(function (response) {
        return response.json();
    })
        .then(function (data){
            console.log(data);
        
            let day1 = document.getElementById('day1');
            day1.innerText = dayjs.unix(data.list[10].dt).format('MMMM D YYYY');
            let imgEl1 = document.createElement('img');
            imgEl1.src = 'http://openweathermap.org/img/wn/'+data.list[2].weather[0].icon+'@2x.png';
            day1.appendChild(imgEl1)
            let temp1 = document.getElementById('temp1');
            temp1.innerText = data.list[2].main.temp +' °F';
            let wind1 = document.getElementById('wind1');
            wind1.innerText = data.list[2].wind.speed +' MPH';
            let hum1 = document.getElementById('hum1');
            hum1.innerText = data.list[2].main.humidity +' %';

            let day2 = document.getElementById('day2');
            day2.innerText = dayjs.unix(data.list[17].dt).format('MMMM D YYYY');
            let imgEl2 = document.createElement('img');
            imgEl2.src = 'http://openweathermap.org/img/wn/'+data.list[9].weather[0].icon+'@2x.png';
            day2.appendChild(imgEl2)
            let temp2 = document.getElementById('temp2');
            temp2.innerText = data.list[9].main.temp +' °F';
            let wind2 = document.getElementById('wind2');
            wind2.innerText = data.list[9].wind.speed +' MPH';
            let hum2 = document.getElementById('hum2');
            hum2.innerText = data.list[9].main.humidity +' %';

            let day3 = document.getElementById('day3');
            day3.innerText = dayjs.unix(data.list[25].dt).format('MMMM D YYYY');
            let imgEl3 = document.createElement('img');
            imgEl3.src = 'http://openweathermap.org/img/wn/'+data.list[17].weather[0].icon+'@2x.png';
            day3.appendChild(imgEl3)
            let temp3 = document.getElementById('temp3');
            temp3.innerText = data.list[17].main.temp +' °F';
            let wind3 = document.getElementById('wind3');
            wind3.innerText = data.list[17].wind.speed +' MPH';
            let hum3 = document.getElementById('hum3');
            hum3.innerText = data.list[17].main.humidity +' %';

            let day4 = document.getElementById('day4');
            day4.innerText = dayjs.unix(data.list[33].dt).format('MMMM D YYYY');
            let imgEl4 = document.createElement('img');
            imgEl4.src = 'http://openweathermap.org/img/wn/'+data.list[25].weather[0].icon+'@2x.png';
            day4.appendChild(imgEl4)
            let temp4 = document.getElementById('temp4');
            temp4.innerText = data.list[25].main.temp +' °F';
            let wind4 = document.getElementById('wind4');
            wind4.innerText = data.list[25].wind.speed +' MPH';
            let hum4 = document.getElementById('hum4');
            hum4.innerText = data.list[25].main.humidity +' %';

            let day5 = document.getElementById('day5');
            day5.innerText = dayjs.unix(data.list[39].dt).format('MMMM D YYYY');
            let imgEl5 = document.createElement('img');
            imgEl5.src = 'http://openweathermap.org/img/wn/'+data.list[33].weather[0].icon+'@2x.png';
            day5.appendChild(imgEl5)
            let temp5 = document.getElementById('temp5');
            temp5.innerText = data.list[33].main.temp +' °F';
            let wind5 = document.getElementById('wind5');
            wind5.innerText = data.list[33].wind.speed +' MPH';
            let hum5 = document.getElementById('hum5');
            hum5.innerText = data.list[33].main.humidity +' %';
        });
}