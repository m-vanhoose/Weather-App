let searchBar =  document.getElementById('cityname');

let requestUrl = 'api.openweathermap.org/data/2.5/forecast?q=' + searchBar + '&appid=3ef2a12f03e1ed36d30c2f2797577759';

let citySearch = function() {
    fetch(requestUrl)
        .then(function (response) {
        return response.json();
    })
        .then(function (data){

    })
}